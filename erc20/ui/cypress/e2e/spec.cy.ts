describe('ERC20', () => {
  const contractAddress = '5Hh9PCWbByCFdZkYgxEn4uoLpDKwsQaEMzwsbCoCP66yGyZW';
  const deployer = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'; // default is Alice
  const spender = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
  const amount = '100';
  const totalSupply = '1000000000000000';
  it('opens up webpage successfully', () => {
    cy.visit('http://127.0.0.1:3000/');
  });
  it('enters smart contract address in input and presses submit button', () => {
    cy.get('#address').type(contractAddress);
    cy.get('#submitBtn').click();
    cy.get('#smartContractOutput').invoke('val').should('eq', contractAddress);
  });
  it('checks the total supply', () => {
    cy.get('#totalSupplyBtn').click();
    cy.get('#totalSupply').invoke('val').should('eq', totalSupply);
  });
  it('checks balance of given address', () => {
    cy.get('#balanceOfAddress').type(deployer);
    cy.get('#balanceOfBtn').click();
    cy.get('#balanceOfOutput').invoke('val').should('match', /[0-9]/);

  });
  it('checks the allowance from owner to given address', () => {
    cy.get('#ownerAddress').type(deployer);
    cy.get('#spenderAddress').type(spender);
    cy.get('#allowanceBtn').click();
    cy.get('#allowanceResult').invoke('val').should('match', /[0-9]/);
  });
  it('approves given balance to an address', () => {
    cy.get('#spenderApproveAddress').type(deployer);
    cy.get('#spenderApproveBalance').type('500');
    cy.get('#approveBtn').click();
    cy.get('#approveResult').invoke('val').should('eq', 'Ok')
  });
  it('should transfer to given address', () => {
    cy.get('#transferTo').type(spender);
    cy.get('#transferBalance').type(amount)
    cy.get('#transferBtn').click();
    cy.get('#transferResult').invoke('val').should('eq', 'Ok');
  });
  it('should transfer from a given address to a given address', () => {
    cy.get('#transferFromFrom').type(deployer);
    cy.get('#transferFromTo').type(spender);
    cy.get('#transferFromBalance').type(amount);
    cy.get('#transferFromBtn').click();
    cy.get('#transferFromResult').invoke('val').should('eq', 'Ok');
  });
})

export {}