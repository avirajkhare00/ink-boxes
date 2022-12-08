describe('ERC-721', () => {
  const contractAddress = "5CgjQheW1T8jaB4zUgwUjv9JQPe1pDU4BpBaLPPEiwZZdj3R";
  const deployer = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
  const spender = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty";
  const tokenId = '0';
  // If you'll use assertions to check the operation's outcome, you'll see
  // the tests will fail, expecially if the contract has been just deployed.\
  it('opens up webpage', () => {
    cy.visit('http://127.0.0.1:3000/');
  });
  it('enters the address', () => {
    cy.get('#address').type(contractAddress);
    cy.get('#submitAddressBtn').click();
    cy.get('#smartContractOutput').invoke('val').should('eq', contractAddress);
  });
  // to fix above issue, we will mint first.
  it('mints a new token', () => {
    cy.get('#mintTokenId').type(tokenId);
    cy.get('#mintTokenBtn').click();
  });
  it('checks balance of a given address, should increase by 1', () => {
    cy.get('#balanceOf').type(deployer);
    cy.get('#balanceOfBtn').click();
    cy.get('#balanceOfOutput').invoke('val').should('eq', '1');
  });
  it('checks owner of given token ID', () => {
    cy.get('#ownerOf').type(tokenId);
    cy.get('#ownerOfBtn').click();
    cy.get('#ownerOfOutput').invoke('val').should('eq', deployer);
  });
  it('approves the token ID to caller', () => {
    cy.get('#getApproved').type(tokenId);
    cy.get('#getApprovedBtn').click();
  });
  it('transfers the token to given address', () => {
    cy.get('#transferAddress').type(spender);
    cy.get('#transferTokenId').type(tokenId);
    cy.get('#transferBtn').click();
    cy.get('#transferBtn').click();
    cy.get('#transferOutput').invoke('val').should('eq', 'Ok');
  });
  it('approves spender for given token id', () => {
    cy.get('#approveAddress').type(spender);
    cy.get('#approveTokenId').type(tokenId);
    cy.get('#approveBtn').click();
    cy.get('#approveBtn').click();
  })
  it('transfers from given address to address, and balance of deployer should increase by 1', () => {
    cy.get('#approveOutput').invoke('val').should('eq', 'Ok');
    cy.get('#transferFromFromAddress').type(spender);
    cy.get('#transferFromToAddress').type(deployer);
    cy.get('#transferFromTokenId').type(tokenId);
    cy.get('#transferFromBtn').click();
    cy.get('#transferFromOutput').invoke('val').should('eq', 'Ok');
    cy.get('#balanceOf').clear();
    cy.get('#balanceOf').type(spender);
    cy.get('#balanceOfBtn').click();
    cy.get('#balanceOfOutput').invoke('val').should('eq', '1');
  });
})

export {}