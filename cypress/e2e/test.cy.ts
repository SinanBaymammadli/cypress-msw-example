import { http, HttpResponse } from "msw";
import { worker } from "../../mocks/browser";
import { mockTodos } from "../../mocks/handlers";

describe("template spec", () => {
	it("passes without mocks", () => {
		cy.visit("http://localhost:5173");
		cy.contains("Hello world!");
		cy.contains("laboriosam mollitia et enim quasi adipisci quia provident illum");
	});

	it("passes with mock", () => {
		cy.interceptRequest(
			mockTodos([
				{
					userId: 1,
					id: 1,
					title: "New todo",
					completed: false,
				},
			]),
		);

		cy.visit("http://localhost:5173");
		cy.contains("Hello world!");
		cy.contains("New todo");
	});
});
