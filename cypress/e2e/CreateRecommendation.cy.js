import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

const name = faker.name.jobType();

// - Criation tests
describe("Test create recommendation", () => {
  it("Create a new test", () => {
    cy.visit(url);
    cy.get("[data-cy=Name]").type(name);
    cy.get("[data-cy=Url]").type("https://www.youtube.com/watch?v=kXYiU_JCYtU");
    cy.get("[data-cy=Create]").click();
    cy.url().should("equal", url);
  });
});

//  - Upvote tests
describe("Test Upvote recomendation", () => {
  it("Add a like to this recommendation", () => {
    cy.visit(url);

    // * Add one like to this recommendation
    cy.get("[data-cy=Representative]").within(() => {
      cy.get("[data-cy=Upvote]").click();
    });

    // * Verify if url is correct
    cy.url().should("equal", url);
  });
});

// - Downvote tests
describe("Test Downvote recomendation", () => {
  it("Add a dislike to this recommendation", () => {
    cy.visit(url);

    // * Add one dislike to this recommendation
    cy.get("[data-cy=Representative]").within(() => {
      cy.get("[data-cy=Downvote]").click();
    });

    // * Verify if url is correct
    cy.url().should("equal", url);
  });

  it("Add more than 5 dislikes and exclude recommendation", () => {
    cy.visit(url);

    // // * Create a new recommendation
    // const name = faker.name.jobType();
    // cy.get("[data-cy=Name]").type(name);
    // cy.get("[data-cy=Url]").type("https://www.youtube.com/watch?v=kXYiU_JCYtU");
    // cy.get("[data-cy=Create]").click();

    // * Add 6 dislikes to this recomendation
    cy.get(`[data-cy=${name}]`).within(() => {
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
    });

    //  * Verify if this recommendation exist
    cy.contains(`[data-cy=${name}]`).should("not.exist");
    cy.url().should("equal", url);
  });
});
