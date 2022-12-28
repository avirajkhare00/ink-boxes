import type { NextPage } from 'next'
import { useState } from 'react';
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abiData from '../abi/erc721-contract-abi'
import balanceOfQuery from '../core/balance-of-query';
import approveQuery from '../core/approve-query';
import transferQuery from '../core/transfer-query';
import mintQuery from '../core/mint-query';
import ownerOfQuery from '../core/owner-of-query';
import getApprovedQuery from '../core/get-approved-query';
import transferFromQuery from '../core/transfer-from-query';

const WS_PROVIDER = 'ws://127.0.0.1:9944'
const gasLimit = 1000000000001;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState('');
  const [addressSubmitted, setAddressSubmitted] = useState(false);

  const submitAddress = () => {
    const address = (document.getElementById('address') as HTMLInputElement).value;
    (document.getElementById('smartContractOutput') as HTMLInputElement).value = address;
    setAddress(address);
  }

  const balanceOf = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const inputAddress = (document.getElementById('balanceOf') as HTMLInputElement).value;

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .balanceOf({ storageDepositLimit, gasLimit }, inputAddress)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await balanceOfQuery(contract, inputAddress);
  }

  const ownerOf = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const tokenID = parseInt((document.getElementById('ownerOf') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .ownerOf({ storageDepositLimit, gasLimit }, tokenID)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await ownerOfQuery(contract, address, tokenID);
  }

  const getApproved = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const tokenID = parseInt((document.getElementById('getApproved') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .getApproved({ storageDepositLimit, gasLimit }, tokenID)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await getApprovedQuery(contract, address, tokenID);
  }

  const transferFrom = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const transferFromAddress = (document.getElementById('transferFromFromAddress') as HTMLInputElement).value;
    const transferFromToAddress = (document.getElementById('transferFromToAddress') as HTMLInputElement).value;

    const transferTokenId = parseInt((document.getElementById('transferFromTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .transferFrom({ storageDepositLimit, gasLimit, }, transferFromAddress, transferFromToAddress, transferTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await transferFromQuery(contract, transferFromAddress, transferFromToAddress, transferTokenId);
  }

  const approve = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const approveAddress = (document.getElementById('approveAddress') as HTMLInputElement).value;

    const approveTokenId = parseInt((document.getElementById('approveTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .approve({ storageDepositLimit, gasLimit, }, approveAddress, approveTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await approveQuery(contract, approveAddress, approveTokenId);
  }

  const transfer = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const transferAddress = (document.getElementById('transferAddress') as HTMLInputElement).value;

    const transferTokenId = parseInt((document.getElementById('transferTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .transfer({ storageDepositLimit, gasLimit, }, transferAddress, transferTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await transferQuery(contract, transferAddress, transferTokenId);
  }

  const mint = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const mintTokenId = parseInt((document.getElementById('mintTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .mint({ storageDepositLimit, gasLimit, }, mintTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await mintQuery(contract, address, mintTokenId);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>ERC721 Contract</title>
        <meta name="description" content="ERC20 Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row>
          <Col md='2'></Col>
          <Col md='8'>
            <h1>ERC-721 Contract</h1>
            <Form>
              <FormGroup>
                <Label for="address">
                  Enter Smart Contract Address
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Enter your erc20 smart contract address to use the UI.
                  </span>
                </Label>
                <Input id="address"></Input>
                <Button id='submitAddressBtn' color='primary' onClick={submitAddress}>Submit</Button>
                <br />
                Smart Contract Address
                <Input id="smartContractOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="balanceOf">
                  Balance Of
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Gives balance of a given address.
                  </span>
                </Label>
                <Input id="balanceOf" placeholder="Enter address"></Input>
                <Button id='balanceOfBtn' color='primary' onClick={balanceOf}>Submit</Button>
                <br />
                <Label for="balanceOfOutput">
                  Output
                </Label>
                <Input id="balanceOfOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="ownerOf">
                  Owner Of
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Gives who is owner of given NFT ID.
                  </span>
                </Label>
                <Input id="ownerOf" placeholder="Enter token ID"></Input>
                <Button id='ownerOfBtn' color='primary' onClick={ownerOf}>Submit</Button>
                <br />
                <Label for="ownerOfOutput">
                  Output
                </Label>
                <Input id="ownerOfOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="getApproved">
                  Get Approved
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Get approved to send token on behalf of an owner.
                  </span>
                </Label>
                <Input id="getApproved" placeholder="Enter token ID" type="number"></Input>
                <Button id='getApprovedBtn' color='primary' onClick={getApproved}>Submit</Button>
              </FormGroup>
              <FormGroup>
                <Label for="approve">
                  Approve
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Approve to address with token id so that spender can take action on your behalf.
                  </span>
                </Label>
                <Input id="approveAddress" placeholder="Enter approval address"></Input>
                <Input id="approveTokenId" placeholder="Enter token ID"></Input>
                <Button id='approveBtn' color='primary' onClick={approve}>Submit</Button>
                <br />
                <Label for="approveOutput">
                  Output
                </Label>
                <Input id="approveOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="transfer">
                  Transfer
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Transfer a token to different address.
                  </span>
                </Label>
                <Input id="transferAddress" placeholder="Enter transfer address"></Input>
                <Input id="transferTokenId" placeholder="Enter token ID" type='number'></Input>
                <Button id='transferBtn' color='primary' onClick={transfer}>Submit</Button>
                <br />
                <Label for="transferOutput">
                  Output
                </Label>
                <Input id="transferOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="transferFrom">
                  Transfer From
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Owner can transfer a token from a address to a address.
                  </span>
                </Label>
                <Input id="transferFromFromAddress" placeholder="Enter transfer from address"></Input>
                <Input id="transferFromToAddress" placeholder="Enter transfer to address"></Input>
                <Input id="transferFromTokenId" placeholder="Enter token ID" type='number'></Input>
                <Button id='transferFromBtn' color='primary' onClick={transferFrom}>Submit</Button>
                <br />
                <Label for="transferFromOutput">
                  Output
                </Label>
                <Input id="transferFromOutput" disabled></Input>
              </FormGroup>
              <FormGroup>
                <Label for="mint">
                  Mint
                  <br />
                  <span style={{"fontSize": "12px"}}>
                    Mints a new Token.
                  </span>
                </Label>
                <Input id="mintTokenId" placeholder="Enter token ID"></Input>
                <Button id='mintTokenBtn' color='primary' onClick={mint}>Submit</Button>
                <br />
                <Label for="mintOutput">
                  Output
                </Label>
                <Input id="mintOutput" disabled></Input>
              </FormGroup>
            </Form>
          </Col>
          <Col md='2'></Col>
        </Row>
      </main>
    </div>
  )
}

export default Home
