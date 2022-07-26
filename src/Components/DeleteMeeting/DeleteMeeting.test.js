import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react"

import DeleteMeeting from "./DeleteMeeting"

// Check if the Delete button exists for meetings. This test will fail if no meetings are there but initally, we do provide some meetings
test('Delete Meeting Button', () =>{
    render(<DeleteMeeting />);
    const deleteButton = screen.getByText(/Delete/i)
    expect(deleteButton).toBeInTheDocument()
})