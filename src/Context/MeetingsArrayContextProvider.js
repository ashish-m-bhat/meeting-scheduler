import React, { createContext, useState } from 'react';
import checkClashes from '../Utils/checkClashes';
import preprocess from '../Utils/preprocess';


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

  let room3Array = [
    {desc:'1v1', 'startTime':'09:00 am', 'endTime': '09:30 am'},
    {desc:'3v3', 'startTime':'09:35 pm', 'endTime': '10:45 pm'},
    {desc:'hehe', 'startTime':'10:10 am', 'endTime': '11:30 am'},
  ];

  const initialMeetingArrays = [room1Array, room2Array, room3Array];

export const MeetingsArrayContext = createContext({
    meetingsArrayObject:{}
});

/* meetingsArray will be an object of arrays
 meetingsArray = {
                    room1: [],
                    room2: [],
                    room3: [],
                  }
*/

const MeetingsArrayContextProvider = props => {
  const newInitialArray=[]
  initialMeetingArrays.forEach((eachRoomArray, index) =>{
    if(localStorage.getItem('room'+(index+1))){
      eachRoomArray = JSON.parse(localStorage.getItem('room'+(index+1)));
      newInitialArray.push(eachRoomArray);
    }
    else{
      preprocess(eachRoomArray);
      checkClashes(eachRoomArray);
      localStorage.setItem('room'+(index+1), JSON.stringify(eachRoomArray))
    }
  });

    const [meetingsArrayObject] = useState({'room1':newInitialArray[0], 'room2':newInitialArray[1], 'room3':newInitialArray[2]});

  return (
    <MeetingsArrayContext.Provider value={{meetingsArrayObject:meetingsArrayObject}}>
        {props.children}
    </MeetingsArrayContext.Provider>
  )
}

export default MeetingsArrayContextProvider;