import React, { useState } from 'react';
import cssClasses from './NewMeetingForm.module.css';

const NewMeetingForm = ({NewMeetingSubmissionHandler, setShowNewMeetingForm}) => {
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const newMeetingFormSubmitHandler = (event) =>{
        event.preventDefault();

        // Need to have all 3 fields
        if(!description.length || !startTime.length || !endTime.length){
            window.alert('Please add all the fields!');
            return;
        }

            // Call the parent method passed through props as an object
        NewMeetingSubmissionHandler({desc:description, startTime, endTime});
        setDescription('')
        setStartTime('');
        setEndTime('');
        setShowNewMeetingForm(false);
    }

  return (
    <>
        <form className={cssClasses.newMeetingForm}>
            Book a New Meeting
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
                <input type='text' name='startTime' value={startTime} onChange={(e)=>setStartTime(e.target.value)} placeholder='Start Time hh:mm am/pm' />
            </p>
            <p>
                <label htmlFor='startTime'>
                    End Time : hh:mm am/pm
                </label>
                <input type='text' name='endTime' value={endTime} onChange={(e)=>setEndTime(e.target.value)} placeholder='End Time hh:mm am/pm' />
            </p>
                <div className={cssClasses.buttonSection}>
                    <button onClick={()=>setShowNewMeetingForm(false)}> Cancel </button>
                    <button onClick={newMeetingFormSubmitHandler}> Book! </button>
                </div>
        </form>
    </>
  )
}

export default NewMeetingForm;