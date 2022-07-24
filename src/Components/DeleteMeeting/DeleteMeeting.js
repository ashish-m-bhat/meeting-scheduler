import React from 'react';

// Deletes a meeting by filtering the array, updating the localStorage and reloading the site
const DeleteMeeting = ({meetingToDelete, meetingsArray, roomId, setRefreshMeetings}) => {
    const deleteMeetingButtonHandler = (e) =>{
        if(window.confirm(`Are you sure want to delete the meeting ${meetingToDelete.desc} ?`)){
            setRefreshMeetings(state => !state); // Doesn't work. Does rerender the parent components but state isn't updated then. Further investigation needed.
            meetingsArray = meetingsArray.filter(eachMeeting => eachMeeting.desc != meetingToDelete.desc);
            localStorage.setItem(roomId, JSON.stringify(meetingsArray));
            window.location.reload();
        }
    }
  return (
        <button onClick={deleteMeetingButtonHandler}>X</button>
  )
}

export default DeleteMeeting;