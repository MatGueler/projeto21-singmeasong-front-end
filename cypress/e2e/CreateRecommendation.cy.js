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
