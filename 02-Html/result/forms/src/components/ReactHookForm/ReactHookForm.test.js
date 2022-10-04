import {fireEvent, render, screen} from "@testing-library/react";
import ReactHookForm from "./ReactHookForm";
import '@testing-library/jest-dom'
import userEvent from "@testing-*//user-event";

describe("App", () => {
    it('renders ReackHookForm component', () => {
        render(<ReactHookForm />)

        expect(screen.getByText(/Banana/i)).toBeInTheDocument()
        expect(screen.getByText(/Choose fruits you like/i)).toBeInTheDocument()

        expect(screen.queryByText(/Choose your favorite anime/i)).toBeNull()
        expect(screen.queryByText(/Choose fruits you like/i)).toHaveClass('h3-element')
    })

    it('check click on checkbox', () => {
        render(<ReactHookForm />)

        const label = screen.getByText(/Banana/i)
        const input = screen.getByTestId('first-input')
        userEvent.click(label)

        expect(input).toBeChecked()
    })
    it('check if error message works correctly', async() => {
        render(<ReactHookForm />)

        const button = screen.queryByTestId('btn')
        expect(screen.queryByTestId('error-text')).toBeNull()
        fireEvent.click(button)

        expect(await screen.findByText('fruits field must have at least 1 items'));
    })
    it('check if next questions appear correctly', async() => {
        render(<ReactHookForm />)

        const button = screen.queryByTestId('btn')
        const label = screen.getByText(/Banana/i)
        fireEvent.click(label)
        fireEvent.click(button)

        expect(await screen.findByText('Naruto'));
    })
})