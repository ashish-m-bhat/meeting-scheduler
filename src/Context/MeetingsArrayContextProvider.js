import React, { createContext, useState } from 'react';


let room1Array = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 am'},
    {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
    {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
    {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
  ];

  let room2Array = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 pm'},
    {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
    {desc:'Secret Meeting', 'startTime':'10:00 am', 'endTime': '11:00 am'},
    {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
    {desc:'3v3', 'startTime':'10:00 pm', 'endTime': '10:45 pm'},
  ];

  // Helper function. Returns an object fo hour and mins
const getHoursMinutes = (arr) => {
  let hours = 0,
    minutes = 0;
  if (arr[arr.length - 2] === "p") {
    hours += 12;
  }
  arr.splice(5);
  hours += +arr.slice(0, 2).join("");
  minutes = +arr.slice(3).join("");
  return {
    hours,
    minutes,
  };
};

/*
Removes the spaces, am pm, : and modifies the meetingsArray to have meaningful data
Each array element of meetingsArray will be of type:
{
    desc: 'some desc',
    startTime: { startTimeHours, startTimeMinutes },
    endTime: { endTimeHours, endTimeMinutes }
  }
*/

  export const preprocess = (meetingsArray) => {
    for (let i = 0; i < meetingsArray.length; i++) {
      const currentMeeting = meetingsArray[i];
      console.log(currentMeeting);
      let { startTime, endTime } = currentMeeting;
      const startTimeArr = startTime.split("");
      const endTimeArr = endTime.split("");

      const { hours: startTimeHours, minutes: startTimeMinutes } =
        getHoursMinutes(startTimeArr);
      const { hours: endTimeHours, minutes: endTimeMinutes } =
        getHoursMinutes(endTimeArr);

      // Remove the meeting
      meetingsArray.splice(i, 1);
      const newDesc = {
        desc: currentMeeting.desc,
        startTime: { startTimeHours, startTimeMinutes },
        endTime: { endTimeHours, endTimeMinutes },
      };
      // Add the newly structured meeting
      meetingsArray.splice(i, 0, newDesc);
    }
  };

export const MeetingsArrayContext = createContext({
    meetingsArray:{}
});

/* meetingsArray will be an object of arrays
 meetingsArray = {
                    room1: [],
                    room2: [],
                  }
*/
const MeetingsArrayContextProvider = props => {
  preprocess(room1Array);
  preprocess(room2Array);

    const [meetingsArray, setMeetingsArray] = useState({'room1':room1Array, 'room2':room2Array});

  return (
    <MeetingsArrayContext.Provider value={{meetingsArray:meetingsArray}}>
        {props.children}
    </MeetingsArrayContext.Provider>
  )
}

export default MeetingsArrayContextProvider;