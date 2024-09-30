import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173", // Url that application runs on
		setupNodeEvents() {
			// implement node event listeners here
		},
	},
});
