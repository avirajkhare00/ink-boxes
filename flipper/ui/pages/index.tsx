import type { NextPage } from 'next'
import { useState } from 'react';
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abiData from '../abi/flipper-contract-abi'

import { Row, Col, Input, Button } from 'reactstrap';

const WS_PROVIDER = 'ws://127.0.0.1:9944'
const gasLimit = 1000000000001;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState('');
  const [value, setValue] = useState('');

  const query = async (contract: ContractPromise, address: string) => {
    // (We perform the send from an account, here using Alice's address)
    const { gasRequired, result, output } = await contract.query.get(
      address,
      {
        gasLimit,
        storageDepositLimit,
      }
    );

    // The actual result from RPC as `ContractExecResult`
    console.log(result.toHuman());

    // the gas consumed for contract execution
    console.log(gasRequired.toHuman());

    // check if the call was successful
    if (result.isOk) {
      // output the return value
      console.log('Success', output?.toHuman());

      if (output) {
        setValue(output?.toString());
      }
    } else {
      console.error('Error', result.asErr);
    }
  }

  const flip = async () => {
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
      .flip({ storageDepositLimit, gasLimit })
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await query(contract, alice.address);
  }

  function submitSmartContractAddress () {
    let smartContractAddress = (document.getElementById('smartContractAddress') as HTMLInputElement)?.value;
    (document.getElementById('smartContractOutput') as HTMLInputElement).value = smartContractAddress;
    setAddress(smartContractAddress);
  }


  return (
    <div>
      <Head>
        <title>Flipper Contract</title>
        <meta name="description" content="Flipper Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <>
          <Row>
            <Col md='2'></Col>
            <Col md='8'>
              <h1>Flipper</h1>
              <h3>Enter Smart Contract Address</h3>
              <Input id='smartContractAddress' />
              <Button id='submitBtn' onClick={submitSmartContractAddress} color='primary'>Submit</Button>
              <h3>Smart Contract Address</h3>
              <Input id="smartContractOutput" disabled></Input>
              <h3>Value: <span id="flipOutput">{value}</span></h3>
              <h4>Press the button below to flip the value</h4>
              <Button id='flipBtn' onClick={flip} color='primary'>Flip</Button>
            </Col>
            <Col md='2'></Col>
          </Row>
        </>
      </main>
    </div>
  )
}

export default Home
