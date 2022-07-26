import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import NewMeetingForm from './NewMeetingForm';

// Check if the form exists and also if the buttons for displayg the form, to book a meeting and cancel exist
describe("Testing New Meeting Form", ()=>{
    test('Check Form exists', () =>{
        render(<NewMeetingForm />);
        const newMeetingForm = screen.getByText('Book a New Meeting')
        expect(newMeetingForm).toBeInTheDocument();
    });

    test('Open the Form', () =>{
        render(<NewMeetingForm />);
        const formOpenButton = screen.getByText('Book a New Meeting');
        userEvent.click(formOpenButton);

        const bookButton = screen.getByText('Book!');
        const cancelButton = screen.getByText('Cancel');

        expect(bookButton).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
    })
})
