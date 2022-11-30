import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Button, FormGroup, Label, Input } from 'reactstrap';

describe("ERC721", () => {

    describe("ERC721", () => {
        it("ERC-721 Contract should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('ERC-721 Contract')).toBeInTheDocument();
        });
        it("Enter Smart Contract Address should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Enter Smart Contract Address')).toBeInTheDocument();
        });
        it("Balance Of should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Balance Of')).toBeInTheDocument();
        });
        it("Owner Of should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Owner Of')).toBeInTheDocument();
        });
        it("Get Approved should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Get Approved')).toBeInTheDocument();
        });
        it("Approve should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Approve')).toBeInTheDocument();
        });
        it("Transfer should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Transfer')).toBeInTheDocument();
        });
        it("Transfer From should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Transfer From')).toBeInTheDocument();
        });
        it("Mint should display in the app", () => {
            render(<Home />);
            expect(screen.getByText('Mint')).toBeInTheDocument();
        });
        it("should click Enter Smart Contract submit Button", async () => {
            const submitAddress = jest.fn();
            render(<Button color='primary' onClick={submitAddress}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(submitAddress).toHaveBeenCalled();
        });
        it("should click Balance Of submit Button", async () => {
            const balanceOf = jest.fn();
            render(<Button color='primary' onClick={balanceOf}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(balanceOf).toHaveBeenCalled();
        });
        it("should click Owner Of submit Button", async () => {
            const ownerOf = jest.fn();
            render(<Button color='primary' onClick={ownerOf}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(ownerOf).toHaveBeenCalled();
        });
        it("should click get approved submit Button", async () => {
            const getApproved = jest.fn();
            render(<Button color='primary' onClick={getApproved}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(getApproved).toHaveBeenCalled();
        });
        it("should click Approve submit Button", async () => {
            const approve = jest.fn();
            render(<Button color='primary' onClick={approve}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(approve).toHaveBeenCalled();
        });
        it("should click transfer submit Button", async () => {
            const transfer = jest.fn();
            render(<Button color='primary' onClick={transfer}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(transfer).toHaveBeenCalled();
        });
        it("should click transferFrom submit Button", async () => {
            const transferFrom = jest.fn();
            render(<Button color='primary' onClick={transferFrom}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(transferFrom).toHaveBeenCalled();
        });
        it("should click mint submit Button", async () => {
            const mint = jest.fn();
            render(<Button color='primary' onClick={mint}>Submit</Button>);
            await userEvent.click(screen.getByText("Submit"));
            expect(mint).toHaveBeenCalled();
        });
        it("should get smart contract output value from input field", async () => {
            const submitAddress = () => {
                let smartContractAddress = (document.getElementById('address') as HTMLInputElement)?.value;
                (document.getElementById('smartContractOutput') as HTMLInputElement).value = smartContractAddress;
            }
            render(
                <FormGroup>
                    <Label for="address">
                        Enter Smart Contract Address
                    </Label>
                    <Input id="address"></Input>
                    <Button color='primary' onClick={submitAddress}>Submit</Button>
                    <br />
                    Smart Contract Address
                    <Input id="smartContractOutput" disabled></Input>
                </FormGroup>
            );
            (document.getElementById("address") as HTMLInputElement).value = "abcd123"
            await userEvent.click(screen.getByText("Submit"));
            const smartContractInput = document.getElementById("smartContractOutput");
            expect((smartContractInput as HTMLInputElement).value).toEqual("abcd123");
        });
    });
});