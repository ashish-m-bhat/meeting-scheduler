import React, { useState } from 'react';

const NewMeetingForm = ({NewMeetingSubmissionHandler}) => {
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const newMeetingFormSubmitHandler = (event) =>{
        event.preventDefault();

        // Call the parent method passed through props as an object
        NewMeetingSubmissionHandler({desc:description, startTime, endTime});
        setDescription('')
        setStartTime('');
        setEndTime('');

    }

  return (
    <>
        <form>
            <p>
                <label htmlFor='Description'>
                    Description
                </label>
                <input type='text' name='Description' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
            </p>
            <p>
                <label htmlFor='startTime'>
                    Start Time : hh:mm am/pm
                </label>
                <input type='text' name='startTime' value={startTime} onChange={(e)=>setStartTime(e.target.value)} placeholder='Start Time' />
            </p>
            <p>
                <label htmlFor='startTime'>
                    End Time : hh:mm am/pm
                </label>
                <input type='text' name='endTime' value={endTime} onChange={(e)=>setEndTime(e.target.value)} placeholder='End Time' />
            </p>
                <button onClick={newMeetingFormSubmitHandler}> Book! </button>
        </form>
    </>
  )
}

export default NewMeetingForm;