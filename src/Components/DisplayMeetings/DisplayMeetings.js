import React from 'react';
import cssClasses from './DisplayMeetings.module.css';
import EachMeeting from './EachMeeting';

/*
  1. Create a main div meetingsDiv. This will be appended to the mainContainerDiv
  2. For each meeting ( we will be looking at non clashing only), create a div and set the properties
*/
const DisplayMeetings = ({meetingsArray}) => {

    const createMeetingDivs = (meetingsArray) =>{

        // Create the outer div
        // const meetingsDiv = document.createElement('div');
        // meetingsDiv.setAttribute('id', 'meetingsDiv');

        for(let i=0;i<meetingsArray.length;i++){

        }

        // Append the outer div to the main div
        // document.getElementById('mainContainerDiv').appendChild(meetingsDiv);
      }
  return (
       <div className={cssClasses.meetingsDiv}>
        {meetingsArray.map(eachMeeting =>{
          return(
            <EachMeeting key={Math.random()*1000} meeting={eachMeeting} />
          )
        })}
       </div>
  )
}

export default DisplayMeetings;