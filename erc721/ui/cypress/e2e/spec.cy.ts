describe('ERC-721', () => {
  const contractAddress = "5Fh6cF6VD6mztrfqj4gLA3xzWzE9urCpHGiXBJPy1Vi2SDiE"
  const deployer = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
  const spender = "5G1QY5qEweAgUpZaWs23iC8B5ejKsFQQ5WAWuBwS5XLeSajt"
  const tokenId = '0';
  // If you'll use assertions to check the operation's outcome, you'll see
  // the tests will fail, expecially if the contract has been just deployed.
  it('opens up webpage', () => {
    cy.visit('http://127.0.0.1:3000/')
  });
  it('enters the address', () => {
    cy.get('#address').type(contractAddress);
    cy.get('#submitAddressBtn').click();
  });
  it('checks balance of a given address', () => {
    cy.get('#balanceOf').type(deployer);
    cy.get('#balanceOfBtn').click();
  });
  it('checks owner of given token ID', () => {
    cy.get('#ownerOf').type(tokenId);
    cy.get('#ownerOfBtn').click();
  });
  it('approves the token ID to caller', () => {
    cy.get('#getApproved').type(tokenId);
    cy.get('#getApprovedBtn').click();
  });
  it('approves the address to given token id', () => {
    cy.get('#approveAddress').type(deployer);
    cy.get('#approveTokenId').type(tokenId);
    cy.get('#approveBtn').click();
  });
  it('transfers the token to given address', () => {
    cy.get('#transferAddress').type(spender);
    cy.get('#transferTokenId').type(tokenId);
    cy.get('#transferBtn').click();
  });
  it('transfers from given address to address', () => {
    cy.get('#transferFromFromAddress').type(deployer)
    cy.get('#transferFromToAddress').type(spender)
    cy.get('#transferFromTokenId').type(tokenId)
    cy.get('#transferFromBtn').click();
  });
  it('mints a new token', () => {
    cy.get('#mintTokenId').type(tokenId);
    cy.get('#mintTokenBtn').click();
  });
})

export {}