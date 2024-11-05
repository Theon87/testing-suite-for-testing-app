import React from "react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz", () => {
  it("renders a quiz", () => {
    cy.mount(<Quiz />);
    cy.get("h1").should("have.text", "Quiz");
  });
});