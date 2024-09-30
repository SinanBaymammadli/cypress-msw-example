import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { ENV } from "./env";
import { todoSchema } from "./schemas";

export function App() {
	const { data: todos } = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos");
			const json = await response.json();
			return z.array(todoSchema).parse(json);
		},
	});

	return (
		<main>
			<h1>Hello world!</h1>

			<h2>Mocking: {ENV.VITE_MSW_MOCKING_ENABLED ? "Enabled" : "Disabled"}</h2>

			<ul>
				{todos?.map((todo) => {
					return <li key={todo.id}>{todo.title}</li>;
				})}
			</ul>
		</main>
	);
}
