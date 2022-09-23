import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

// * Criation analysis

describe("Test create recommendation", () => {
  it("passes", () => {
    const name = faker.name.jobType();
    cy.visit(url);
    cy.get("[data-cy=Name]").type(name);
    cy.get("[data-cy=Url]").type("https://www.youtube.com/watch?v=kXYiU_JCYtU");
    cy.get("[data-cy=Create]").click();
    cy.url().should("equal", url);
  });
});

// * Pontuation analysis

describe("Test Upvote recomendation", () => {
  it("passes", () => {
    cy.visit(url);
    cy.get("[data-cy=Representative]").within(() => {
      cy.get("[data-cy=Upvote]").click();
    });
    cy.url().should("equal", url);
  });
});

describe("Test Downvote recomendation", () => {
  it("passes", () => {
    cy.visit(url);
    cy.get("[data-cy=Representative]").within(() => {
      cy.get("[data-cy=Downvote]").click();
    });
    cy.url().should("equal", url);
  });
});
