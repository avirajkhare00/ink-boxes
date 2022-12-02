describe('ERC20', () => {
  const contractAddress = '5Fh6cF6VD6mztrfqj4gLA3xzWzE9urCpHGiXBJPy1Vi2SDiE';
  const deployer = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'; // default is Alice
  const spender = '5Hai2MHPBu61Djh5LnEb9EQmYBiYDaRMm6NqderZFGt71Nvw';
  const amount = '100';
  it('opens up webpage successfully', () => {
    cy.visit('http://127.0.0.1:3000/');
  });
  it('enters smart contract address in input and presses submit button', () => {
    cy.get('#address').type(contractAddress);
    cy.get('#submitBtn').click();
  });
  it('checks the total supply', () => {
    cy.get('#totalSupplyBtn').click();
  });
  it('checks balance of given address', () => {
    cy.get('#balanceOfAddress').type(deployer);
    cy.get('#balanceOfBtn').click();
  });
  it('checks the allowance from owner to given address', () => {
    cy.get('#ownerAddress').type(deployer);
    cy.get('#spenderAddress').type(spender);
    cy.get('#allowanceBtn').click();
  });
  it('approves given balance to an address', () => {
    cy.get('#spenderApproveAddress').type(spender);
    cy.get('#spenderApproveBalance').type(amount)
    cy.get('#approveBtn').click();
  });
  it('should transfer to given address', () => {
    cy.get('#transferTo').type(spender);
    cy.get('#transferBalance').type(amount)
    cy.get('#transferBtn').click();
  });
  it('should transfer from a given address to a given address', () => {
    cy.get('#transferFromFrom').type(deployer);
    cy.get('#transferFromTo').type(spender);
    cy.get('#transferFromBalance').type(amount);
    cy.get('#transferFromBtn').click();
  });
})

export {}