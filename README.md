# ink-boxes

Ink boxes are a collection of helpful Ink smart contract boilerplates along with it's frontend. It will already have polkadot.js library using which frontend can talk with the smart contract deployed. Got inspired by truffle boxes on how easily one can spin up the boilerplate code in no time.

### Added ink boxes
 - flipper
 - erc20
 - erc721

### How to contribute

 - Fork this repository.
 - Create a directory whose box you want to add.
 - Add smart contract address in the same name as ink box name and place ui inside ui directory.
 - Create a Pull Request.
 - Once your PR is merged, it will be live on the website.

### FAQ

Q. ERROR: No 'ink_lang' dependency found

A. This should do the trick for you: `cargo install cargo-contract --version 2.0.0-alpha.5`

