describe('Flipper', () => {
  it('opens up webpage successfully', () => {
    cy.visit('http://127.0.0.1:3000/')
  });
  it('enters smart contract address in input and presses submit button', () => {
    cy.get('#smartContractAddress').type('5CeYTr7rrCKp6GBkS4sTTePX3ZwYsup9KwzLDxFaNDhCAPdv'); // enter smart contract here
    cy.get('#submitBtn').click();
  });
  it('clicks on the flip button to check the output', () => {
    cy.get('#flipBtn').click();
    cy.get('#flipOutput').invoke('text').should("eq", "true" || "false");
  });
});
