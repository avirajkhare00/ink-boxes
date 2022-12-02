describe('Flipper', () => {
  const contractAddress = "5Fh6cF6VD6mztrfqj4gLA3xzWzE9urCpHGiXBJPy1Vi2SDiE";
  it('opens up webpage successfully', () => {
    cy.visit('http://127.0.0.1:3000/')
  });
  it('enters smart contract address in input and presses submit button', () => {
    cy.get('#smartContractAddress').type(contractAddress); // enter smart contract here
    cy.get('#submitBtn').click();
  });
  it('clicks on the flip button to check the output', () => {
    cy.get('#flipBtn').click();
    cy.get('#flipOutput').invoke('text').should("eq", "true" || "false");
  });
});

export {}
