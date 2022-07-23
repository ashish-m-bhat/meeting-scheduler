import React from 'react';
import cssClasses from './EachMeeting.module.css';

const EachMeeting = ({meeting}) => {
    let duration = (meeting.endTime.endTimeHours - meeting.startTime.startTimeHours) +
                   (meeting.endTime.endTimeMinutes - meeting.startTime.startTimeMinutes)/60;



    // Set the top and height properties
    const topSpace = meeting.startTime.startTimeHours * 25 + "px";
    const heightOfDiv = 2.6*duration  + 'vh';

  return (
    <div className={cssClasses.meetingDiv} style={{'top':topSpace,'height':heightOfDiv}}>
        {meeting.desc}
        {` : ${('0' + meeting.startTime.startTimeHours).slice(-2)} : ${('0' + meeting.startTime.startTimeMinutes).slice(-2)} - ${('0' + meeting.endTime.endTimeHours).slice(-2)}: ${('0' + meeting.endTime.endTimeMinutes).slice(-2)}`}
    </div>
  )
}

export default EachMeeting;