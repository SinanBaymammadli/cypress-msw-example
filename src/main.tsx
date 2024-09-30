import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Providers } from "./Providers";
import { ENV } from "./env";

async function enableMocking() {
	if (!ENV.VITE_MSW_MOCKING_ENABLED) {
		return;
	}
	const { worker } = await import("../mocks/browser");
	return worker.start();
}

enableMocking().then(() => {
	const rootElement = document.getElementById("root");

	if (rootElement) {
		createRoot(rootElement).render(
			<StrictMode>
				<Providers>
					<App />
				</Providers>
			</StrictMode>,
		);
	}
});
