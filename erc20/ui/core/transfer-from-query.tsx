import { ContractPromise } from '@polkadot/api-contract'

const gasLimit = 1000000000001;
const storageDepositLimit = null;

const transferFromQuery = async (contract: ContractPromise, transferFromAddress: string, transferFromToAddress: string, amount: number) => {
    // (We perform the send from an account, here using Alice's address)
    const { gasRequired, result, output } = await contract.query.transferFrom(
      transferFromAddress,
      {
        gasLimit,
        storageDepositLimit,
      },
      transferFromAddress,
      transferFromToAddress,
      amount
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
        (document.getElementById('transferFromResult') as HTMLInputElement).value = output?.toString();
      }
    } else {
      console.error('Error', result.asErr);
    }
  }

export default transferFromQuery;