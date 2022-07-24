import React from 'react';
import preprocess from '../../Utils/preprocess';
import NewMeetingForm from './NewMeetingForm';

const NewMeeting = ({roomId, meetingsArray, setRefreshMeetings}) => {

    // Data received from the form for the new meeting
    // Preprocess it, check for clashes. If not, add it to the correct slot. No sorting is needed here
    const NewMeetingSubmissionHandler = (data) =>{
        const dataArray = [data];
        preprocess(dataArray);
        data = dataArray[0];
        //check for clashes
        {
            let i = 0, clashed=1
            if(!meetingsArray.length){
                clashed = 0;
                meetingsArray.push(data)
            }

            // before 1st element
            if( (data.endTime.endTimeHours < meetingsArray[0].startTime.startTimeHours) ||  ((data.endTime.endTimeHours === meetingsArray[0].startTime.startTimeHours) && (data.endTime.endTimeMinutes <= meetingsArray[0].startTime.startTimeMinutes))){
                clashed = 0;
                meetingsArray.unshift(data);
            }
            // After last element
            else if(data.startTime.startTimeHours >= meetingsArray[meetingsArray.length-1].endTime.endTimeHours && data.startTime.startTimeMinutes >= meetingsArray[meetingsArray.length-1].endTime.endTimeMinutes){
                clashed = 0;
                meetingsArray.push(data);
            }
            else{
                while(i < meetingsArray.length-1){

                    const newStartHour=data.startTime.startTimeHours, newStartMin=data.startTime.startTimeMinutes, newEndHour=data.endTime.endTimeHours, newEndMin=data.endTime.endtTimeMinutes;
                    const currentStartHour=meetingsArray[i].startTime.startTimeHours, currentStartMin=meetingsArray[i].startTime.startTimeMinutes, currentEndHour=meetingsArray[i].endTime.endTimeHours, currentEndMin=meetingsArray[i].endTime.endtTimeMinutes;
                    const nextStartHour=meetingsArray[i+1].startTime.startTimeHours, nextStartMin=meetingsArray[i+1].startTime.startTimeMinutes, nextEndHour=meetingsArray[i+1].endTime.endTimeHours, nextEndMin=meetingsArray[i+1].endTime.endtTimeMinutes;

                    if( ((newStartHour > currentStartHour) || ((newStartHour === currentStartHour) && (newStartMin >= currentEndMin)) ) &&
                        ((newEndHour < nextStartHour) || ((newEndHour === nextStartHour) && (newEndMin <= nextStartMin)))
                    ){
                        meetingsArray.push(data);
                        clashed = 0;
                        break;
                    }
                    i++;

                }

            }
            if(clashed)
                    alert('clashed');
        }
        localStorage.setItem(roomId, JSON.stringify(meetingsArray));

        // Refresh the meetings. This will re render the MeetingRoom component
        setRefreshMeetings(state => !state);

    }
  return (
    <NewMeetingForm NewMeetingSubmissionHandler={NewMeetingSubmissionHandler} />
  )
}

export default NewMeeting;