import Home from "../pages/index";
import { Button, Input } from 'reactstrap';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Flipper", () => {
    it("checks for text Enter Smart Contract Address is present", () => {
        render(<Home />);
        expect(screen.getByText("Enter Smart Contract Address")).toBeInTheDocument();
    });
    it("checks for text Press button below to flip the value is present", () => {
        render(<Home />);
        expect(screen.getByText("Press button below to flip the value")).toBeInTheDocument();
    });
    it("should click Enter Smart Contract Button", async () => {
        const submitSmartContractAddress = jest.fn();
        render(<Button onClick={submitSmartContractAddress} color='primary'>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(submitSmartContractAddress).toHaveBeenCalled();
    });
    it("should click Flip Button", async () => {
        const flip = jest.fn();
        render(<Button onClick={flip} color='primary'>Flip</Button>);
        await userEvent.click(screen.getByText("Flip"));
        expect(flip).toHaveBeenCalled();
    });
    it("should get smart contract output value from input field", async () => {
        const submitSmartContractAddress = () => {
            let smartContractAddress = (document.getElementById('smartContractAddress') as HTMLInputElement)?.value;
            (document.getElementById('smartContractOutput') as HTMLInputElement).value = smartContractAddress;
          }
        render(
            <div>
                <h3>Enter Smart Contract Address</h3>
                <Input id='smartContractAddress' />
                <Button onClick={submitSmartContractAddress} color='primary'>Submit</Button>
                <h3>Smart Contract Address</h3>
                <Input id="smartContractOutput" disabled></Input>
            </div>
        );
        (document.getElementById("smartContractAddress") as HTMLInputElement).value = "abcd123"
        await userEvent.click(screen.getByText("Submit"));
        const smartContractInput = document.getElementById("smartContractOutput");
        expect((smartContractInput as HTMLInputElement).value).toEqual("abcd123");
    });
});
