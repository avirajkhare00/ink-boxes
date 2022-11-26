import type { NextPage } from 'next'
import { useState } from 'react';
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import abiData from '../abi/erc20-contract-abi'
import totalSupplyQuery from '../core/total-supply-query';
import balanceOfQuery from '../core/balance-of-query';
import approveQuery from '../core/approve-query';
import transferQuery from '../core/transfer-query';
import allowanceQuery from '../core/allowance-query';
import transferFromQuery from '../core/transfer-from-query';

const WS_PROVIDER = 'ws://127.0.0.1:9944'
const gasLimit = 1000000000001;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState('');
  const [addressSubmitted, setAddressSubmitted] = useState(false);

  const submitAddress = () => {
    const address = (document.getElementById('address') as HTMLInputElement).value;
    setAddress(address);
  }

  const allowance = async () => {
    const ownerAddress = (document.getElementById('ownerAddress') as HTMLInputElement).value;
    const spenderAddress = (document.getElementById('spenderAddress') as HTMLInputElement).value;

    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .allowance({ storageDepositLimit, gasLimit }, ownerAddress, spenderAddress)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

      await allowanceQuery(contract, address, ownerAddress, spenderAddress);
  }

  const totalSupply = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .totalSupply({ storageDepositLimit, gasLimit })
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await totalSupplyQuery(contract, alice.address);
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

    const inputAddress = (document.getElementById('balanceOfAddress') as HTMLInputElement).value;

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

      await balanceOfQuery(contract, address, inputAddress);
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

    const approveAddress = (document.getElementById('spenderApproveAddress') as HTMLInputElement).value;

    const approveAmount = parseInt((document.getElementById('spenderApproveBalance') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .approve({ storageDepositLimit, gasLimit, }, approveAddress, approveAmount)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await approveQuery(contract, approveAddress, approveAmount);
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

    const transferAddress = (document.getElementById('transferTo') as HTMLInputElement).value;

    const transferAmount = parseInt((document.getElementById('transferBalance') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .transfer({ storageDepositLimit, gasLimit, }, transferAddress, transferAmount)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await transferQuery(contract, transferAddress, transferAmount);
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

    const transferFromAddress = (document.getElementById('transferFromFrom') as HTMLInputElement).value;
    const transferFromToAddress = (document.getElementById('transferFromTo') as HTMLInputElement).value;
    const transferAmount = parseInt((document.getElementById('transferFromBalance') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .transferFrom({ storageDepositLimit, gasLimit, }, transferFromAddress, transferFromToAddress, transferAmount)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await transferFromQuery(contract, transferFromAddress, transferFromToAddress, transferAmount);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>ERC20 Contract</title>
        <meta name="description" content="ERC20 Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>ERC-20 Contract</h1>
        <Form>
          <FormGroup>
            <Label for="address">
              Enter Smart Contract Address
            </Label>
            <Input id="address"></Input>
            <Button color='primary' onClick={submitAddress}>Submit</Button>
            </FormGroup>
            <FormGroup>
            <Label for="totalSupply">
              Total Supply
            </Label>
            <Input id="totalSupply" disabled></Input>
            <Button color='primary' onClick={totalSupply}>Submit</Button>
          </FormGroup>
          <FormGroup>
            <Label for="balanceOf">
              Balance Of
            </Label>
            <Input id="balanceOfAddress" placeholder="Enter Address" type="text"></Input>
            <Button color='primary' onClick={balanceOf}>Submit</Button>
            <Input id="balanceOfOutput" disabled></Input>
          </FormGroup>
          <FormGroup>
            <Label for="allowance">
              Allowance
            </Label>
            <Input id="ownerAddress" placeholder="Enter Owner address"></Input>
            <Input id="spenderAddress" placeholder="Enter Spender address"></Input>
            <Button color="primary" onClick={allowance}>Submit</Button>
            <Input id="allowanceResult" disabled></Input>
          </FormGroup>
          <FormGroup>
            <Label for="approve">
              Approve
            </Label>
            <Input id="spenderApproveAddress" placeholder="Enter Spender address"></Input>
            <Input id="spenderApproveBalance" placeholder="Enter Balance" type="number"></Input>
            <Button color="primary" onClick={approve}>Submit</Button>
            <Input id="approveResult" disabled></Input>
          </FormGroup>
          <FormGroup>
            <Label for="transfer">
              Transfer
            </Label>
            <Input id="transferTo" placeholder="Enter address"></Input>
            <Input id="transferBalance" placeholder="Enter balance"></Input>
            <Button color="primary" onClick={transfer}>Submit</Button>
            <Input id="transferResult" disabled></Input>
          </FormGroup>
          <FormGroup>
            <Label for="transferFrom">
              Transfer From
            </Label>
            <Input id="transferFromFrom" placeholder="From address"></Input>
            <Input id="transferFromTo" placeholder="To address"></Input>
            <Input id="transferFromBalance" placeholder="Amount" type="number"></Input>
            <Button color="primary" onClick={transferFrom}>Submit</Button>
            <Input id="transferFromResult" disabled></Input>
          </FormGroup>
        </Form>
      </main>
    </div>
  )
}

export default Home
