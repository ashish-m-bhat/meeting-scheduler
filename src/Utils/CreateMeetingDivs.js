import React, { useEffect } from 'react';
import './CreateMeetingDivs.css';

/*
  1. Create a main div meetingsDiv. This will be appended to the mainContainerDiv
  2. For each meeting ( we will be looking at non clashing only), create a div and set the properties
*/
const CreateMeetingDivs = (props) => {

    const createMeetingDivs = (descriptionArray) =>{

        // Create the outer div
        const meetingsDiv = document.createElement('div');
        meetingsDiv.setAttribute('id', 'meetingsDiv');

        for(let i=0;i<descriptionArray.length;i++){
          const currentMeeting = descriptionArray[i];
          let duration = (currentMeeting.endTime.endTimeHours - currentMeeting.startTime.startTimeHours) +
                         (currentMeeting.endTime.endTimeMinutes - currentMeeting.startTime.startTimeMinutes)/60;

          // Create a div for the currentMeeting
          const meetingDiv = document.createElement('div');
          meetingDiv.setAttribute('id', i);
          meetingDiv.setAttribute('class', 'meetingDiv');

          // Set the top and height properties
          const topSpace = currentMeeting.startTime.startTimeHours * 25 + "px";
          const heightOfDiv = 2.6*duration  + 'vh';
          meetingDiv.style.top = topSpace;
          meetingDiv.style.height = heightOfDiv;

          // Set inner contents
          meetingDiv.innerHTML = currentMeeting.desc;
          meetingDiv.innerHTML += ` : ${('0' + currentMeeting.startTime.startTimeHours).slice(-2)} : ${('0' + currentMeeting.startTime.startTimeMinutes).slice(-2)} - ${('0' + currentMeeting.endTime.endTimeHours).slice(-2)}: ${('0' + currentMeeting.endTime.endTimeMinutes).slice(-2)}`

          // Finally append the div
          meetingsDiv.appendChild(meetingDiv);
        }

        // Append the outer div to the main div
        document.getElementById('mainContainerDiv').appendChild(meetingsDiv);
      }

      useEffect(()=> createMeetingDivs(props.descriptionArray), [props.descriptionArray]);
  return (
       <></>
  )
}

export default CreateMeetingDivs;