import { faker } from "@faker-js/faker";
const url = "http://localhost:3000/";

const recomendation = {
  name: faker.name.jobType(),
  youtubeLink: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
};

//  - Upvote tests
describe("Test Upvote recomendation", () => {
  it("Add a like to this recommendation", () => {
    cy.visit(url);

    cy.CreateRecommendation(recomendation);

    // * Add one like to this recommendation
    cy.get(`[data-cy=${recomendation.name}]`).within(() => {
      cy.get("[data-tag=Score]").contains(0);
      cy.get("[data-cy=Upvote]").click();
      cy.get("[data-tag=Score]").contains(1);
    });

    // * Verify if url is correct
    cy.url().should("equal", url);
  });
});

// - Downvote tests
// describe("Test Downvote recomendation", () => {
//   it("Add a dislike to this recommendation", () => {
//     cy.visit(url);

//     // * Add one dislike to this recommendation
//     cy.get("[data-cy=Representative]").within(() => {
//       cy.get("[data-cy=Downvote]").click();
//     });

//     // * Verify if url is correct
//     cy.url().should("equal", url);
//   });

//   // it("Add more than 5 dislikes and exclude recommendation", () => {
//   //   cy.visit(url);

//   //   cy.CreateRecommendation(recomendation);

//   //   // * Add 6 dislikes to this recomendation
//   //   cy.get(`[data-cy=${recomendation.name}]`).within(() => {
//   //     cy.get("[data-cy=Downvote]").click();
//   //     cy.get("[data-cy=Downvote]").click();
//   //     cy.get("[data-cy=Downvote]").click();
//   //     cy.get("[data-cy=Downvote]").click();
//   //     cy.get("[data-cy=Downvote]").click();
//   //     cy.get("[data-cy=Downvote]").click();
//   //   });

//   //   //  * Verify if this recommendation exist
//   //   cy.contains(`[data-cy=${recomendation.name}]`).should("not.exist");
//   //   cy.url().should("equal", url);
//   // });
// });
