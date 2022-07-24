import React from 'react';
import cssClasses from './DisplayMeetings.module.css';
import EachMeeting from './EachMeeting';

/*
  1. Create a main div meetingsDiv. This will be appended to the mainContainerDiv
  2. For each meeting ( we will be looking at non clashing only), create a div and set the properties
*/
const DisplayMeetings = ({meetingsArray, roomId, setRefreshMeetings}) => {

  return (
       <div className={cssClasses.meetingsDiv}>
        {meetingsArray.map(eachMeeting =>{
          return(
            <EachMeeting key={Math.random()*1000} meeting={eachMeeting} meetingsArray={meetingsArray} roomId={roomId} setRefreshMeetings={setRefreshMeetings} />
          )
        })}
       </div>
  )
}

export default DisplayMeetings;