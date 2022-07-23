import React, { createContext, useState } from 'react';


var descriptionArray1 = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 am'},
    {desc:'2v2', 'startTime':'08:00 pm', 'endTime': '10:00 pm'},
    {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
    {desc:'hehe', 'startTime':'09:10 am', 'endTime': '10:30 am'},
    {desc:'Secret Meeting', 'startTime':'10:00 am', 'endTime': '11:00 am'},
  ];

export const MeetingsArrayContext = createContext({
    meetingsArray:[]
});

const MeetingsArrayContextProvider = props => {
    const [meetingsArray, setMeetingsArray] = useState(descriptionArray1);

  return (
    <MeetingsArrayContext.Provider value={{meetingsArray:meetingsArray}}>
        {props.children}
    </MeetingsArrayContext.Provider>
  )
}

export default MeetingsArrayContextProvider;