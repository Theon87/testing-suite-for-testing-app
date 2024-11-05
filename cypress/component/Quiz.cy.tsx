import Quiz from "../../client/src/components/Quiz";

describe("Quiz", () => {
  it("should display a start button on load", () => {
    cy.mount(<Quiz />);
    cy.get("button").should("have.text", "Start Quiz");
  })
    
});