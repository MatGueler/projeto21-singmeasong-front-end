import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

const recomendation = {
  name: faker.name.jobType(),
  youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
};

// - Page top recomendations
describe("Test top recomendations", () => {
  it("Url is correct", () => {
    const topUrl = `${url}top`;
    cy.visit(url);
    cy.get("[data-cy=Top]").click();
    cy.url().should("equal", topUrl);
  });
});

// - Page randomic recomendation
describe("Test randomic recomendation", () => {
  it("Url is correct", () => {
    const randomicUrl = `${url}random`;
    cy.visit(url);
    cy.get("[data-cy=Random]").click();
    cy.url().should("equal", randomicUrl);
  });
});

// - Page home
describe("Test home page", () => {
  it("Url is correct", () => {
    const homeUrl = `${url}`;
    cy.visit(url);
    cy.get("[data-cy=Home]").click();
    cy.url().should("equal", homeUrl);
  });
});
