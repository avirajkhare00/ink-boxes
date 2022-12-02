# ERC721 UI

## Installation

Run `npm i` to install all the packages.

## Run tests

Run `npm test` to test the code.

## Run e2e tests using cypress

 - Instantiate ERC721 smart contract from substrate UI.
 - goto `cypress/e2e/spec.cy.ts` file and update the smart contract address you got from the UI.
 - Replace wallet addresses with the addresses of your choice.
 - Run the dev server by running command: `npm run dev`.
 - Run the cypress by running command: `npx cypress open`, if you want it using cli mode then use `npx cypress run`.
 - Run all the tests.

## Run docker

Run the following commands to run docker container

```bash
docker build -t name-you-want .
docker run -dp 3000:3000 name-you-want
```

## Run the development server

Run the following command: `npm run dev`

## Build the App

Run the following command: `npm run build`

## Run the production App

Run the following command: `npm run start`
