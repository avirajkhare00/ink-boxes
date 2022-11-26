import Home from "../pages/index";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from 'reactstrap';


describe("ERC20", () => {
    it("Enter Smart Contract Address should display in the app", () => {
        render(<Home />);
        expect(screen.getByText('Enter Smart Contract Address')).toBeInTheDocument();
    });
    it("Total Supply should display in the app", () => {
        render(<Home />);
        expect(screen.getByText('Total Supply')).toBeInTheDocument();
    });
    it("Balance Of should display in the app", () => {
        render(<Home />);
        expect(screen.getByText('Balance Of')).toBeInTheDocument();
    });
    it("Allowance should display in the app", () => {
        render(<Home />);
        expect(screen.getByText('Allowance')).toBeInTheDocument();
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
    it("should click Enter Smart Contract submit Button", async () => {
        const submitAddress = jest.fn();
        render(<Button color='primary' onClick={submitAddress}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(submitAddress).toHaveBeenCalled();
    });
    it("should click total supply submit Button", async () => {
        const totalSupply = jest.fn();
        render(<Button color='primary' onClick={totalSupply}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(totalSupply).toHaveBeenCalled();
    });
    it("should click Balance Of submit Button", async () => {
        const balanceOf = jest.fn();
        render(<Button color='primary' onClick={balanceOf}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(balanceOf).toHaveBeenCalled();
    });
    it("should click Allowance submit Button", async () => {
        const allowance = jest.fn();
        render(<Button color="primary" onClick={allowance}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(allowance).toHaveBeenCalled();
    });
    it("should click Approve submit Button", async () => {
        const approve = jest.fn();
        render(<Button color="primary" onClick={approve}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(approve).toHaveBeenCalled();
    });
    it("should click Transfer submit Button", async () => {
        const transfer = jest.fn();
        render(<Button color="primary" onClick={transfer}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(transfer).toHaveBeenCalled();
    });
    it("should click Transfer submit Button", async () => {
        const transferFrom = jest.fn();
        render(<Button color="primary" onClick={transferFrom}>Submit</Button>);
        await userEvent.click(screen.getByText("Submit"));
        expect(transferFrom).toHaveBeenCalled();
    });
  });