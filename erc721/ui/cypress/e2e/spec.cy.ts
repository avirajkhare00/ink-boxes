describe('ERC-721', () => {
  it('opens up webpage', () => {
    cy.visit('http://127.0.0.1:3000/')
  });
  it('enters the address', () => {
    cy.get('#address').type('5DfpUdM7yBhsUH4DdMYy1Z8e8rA9Py3ybq6MxUsLrH5bWiSw'); // change address here
    cy.get('#submitAddressBtn').click();
  });
  it('checks balance of a given address', () => {
    cy.get('#balanceOf').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'); // change address here
    cy.get('#balanceOfBtn').click();
  });
  it('checks owner of given token ID', () => {
    cy.get('#ownerOf').type('0'); // change token id
    cy.get('#ownerOfBtn').click();
  });
  it('approves the token ID to caller', () => {
    cy.get('#getApproved').type('0'); // change token id
    cy.get('#getApprovedBtn').click();
  });
  it('approves the address to given token id', () => {
    cy.get('#approveAddress').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'); // change address here
    cy.get('#approveTokenId').type('0'); // change token id
    cy.get('#approveBtn').click();
  });
  it('transfers the token to given address', () => {
    cy.get('#transferAddress').type('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'); // change address here
    cy.get('#transferTokenId').type('1'); // change token id
    cy.get('#transferBtn').click();
  });
  it('transfers from given address to address', () => {
    cy.get('#transferFromFromAddress').type('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY') // change address here
    cy.get('#transferFromToAddress').type('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM') // change address here
    cy.get('#transferFromTokenId').type('1') // change token id
    cy.get('#transferFromBtn').click();
  });
  it('mints a new token', () => {
    cy.get('#mintTokenId').type('3'); // change token id here
    cy.get('#mintTokenBtn').click();
  });
})