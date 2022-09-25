import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

beforeEach(async () => {
  await cy.request("POST", "http://localhost:5000/e2e/reset", {});
});

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
    cy.intercept("POST", "http://localhost:5000/recommendations").as("create");
    cy.get("[data-cy=Create]").click();
    cy.wait("@create");

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
    cy.intercept("POST", "http://localhost:5000/recommendations").as("create");
    cy.get("[data-cy=Create]").click();
    cy.wait("@create");

    // * Verify if exist just one test with same name
    cy.get(`[data-cy=${recomendation.name}]`).should("have.length", 1);
    cy.url().should("equal", url);
  });
});

// - Get recomendations tests
describe("Test get recommendations", () => {
  it("Get all test", () => {
    cy.visit(url);
    cy.get(`[data-tag=Container]`).its("length").should("be.lte", 10);
    cy.url().should("equal", url);
  });
});
