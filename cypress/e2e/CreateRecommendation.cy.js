import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

const recomendation = {
  name: faker.name.jobType(),
  youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
};

// - Criation tests
describe("Test create recommendation", () => {
  it("Create a new test", () => {
    cy.visit(url);
    const recomendation = {
      name: faker.name.jobType(),
      youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    };

    // * Write in inputs all informations about recommendation
    cy.get("[data-cy=Name]").type(recomendation.name);
    cy.get("[data-cy=Url]").type(recomendation.youtubeLink);
    cy.get("[data-cy=Create]").click();
    cy.url().should("equal", url);
  });

  it("Create a repeated test", () => {
    cy.visit(url);
    const recomendation = {
      name: faker.name.jobType(),
      youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    };

    // * Create a recommendation directly on database
    cy.CreateRecommendation(recomendation);

    // * Try create a new recommendation with already existent name
    cy.get("[data-cy=Name]").type(recomendation.name);
    cy.get("[data-cy=Url]").type(recomendation.youtubeLink);
    cy.get("[data-cy=Create]").click();

    // * Verify if exist just one test with same name
    cy.get(`[data-cy=${recomendation.name}]`).should("have.length", 1);
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

    cy.CreateRecommendation(recomendation);

    // * Add 6 dislikes to this recomendation
    cy.get(`[data-cy=${recomendation.name}]`).within(() => {
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
      cy.get("[data-cy=Downvote]").click();
    });

    //  * Verify if this recommendation exist
    cy.contains(`[data-cy=${recomendation.name}]`).should("not.exist");
    cy.url().should("equal", url);
  });
});
