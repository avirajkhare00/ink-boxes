describe('ERC20', () => {
  it('opens up webpage successfully', () => {
    cy.visit('http://127.0.0.1:3000/');
  });
  it('enters smart contract address in input and presses submit button', () => {
    cy.get('#address').type('5CkvEE9Eo2uuj6WbZGakTquM2eYGULGrr8okztHAP4v2hUTM'); // enter smart contract here
    cy.get('#submitBtn').click();
  });
  it('checks the total supply', () => {
    cy.get('#totalSupplyBtn').click();
  });
  it('checks balance of given address', () => {
    cy.get('#balanceOfAddress').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'); // change it to the address
    cy.get('#balanceOfBtn').click();
  });
  it('checks the allowance from owner to given address', () => {
    cy.get('#ownerAddress').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'); // change this address
    cy.get('#spenderAddress').type('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'); // change this address
    cy.get('#allowanceBtn').click();
  });
  it('approves given balance to an address', () => {
    cy.get('#spenderApproveAddress').type('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'); // change this address
    cy.get('#spenderApproveBalance').type('1000') // change it to desired amount
    cy.get('#approveBtn').click();
  });
  it('should transfer to given address', () => {
    cy.get('#transferTo').type('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'); // change this address
    cy.get('#transferBalance').type('100') // change it to desired amount
    cy.get('#transferBtn').click();
  });
  it('should transfer from a given address to a given address', () => {
    cy.get('#transferFromFrom').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'); // change this address
    cy.get('#transferFromTo').type('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'); // change this address
    cy.get('#transferFromBalance').type('10'); // change it to desired amount
    cy.get('#transferFromBtn').click();
  });
})