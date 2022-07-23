import React, { useContext, useEffect } from "react";
import { MeetingsArrayContext } from "../Context/MeetingsArrayContextProvider";

/*
  1. Check if there's any clash in the sorted meetingsArray
  2. If there's a clash, remove the 2nd meeting
  3. A clash is said to occur if
      a. Next meeting's start hour and current meetings end hour is same and next meeting's start minutes is less than current meeting's end minutes
                  OR
      b. Next meeting's start hour is less than current meeting's end hour
*/

const CheckClashes = () => {
    function checkClashes(meetingsArray){
        for(let i=0;i<meetingsArray.length-1;i++){
          for(let j=i+1;j<meetingsArray.length;j++){
            const currentMeeting = meetingsArray[i], nextMeeting = meetingsArray[j];

            if(nextMeeting.startTime.startTimeHours > currentMeeting.endTime.endTimeHours){
              // No clash
              continue;
            }
            else{
              if((nextMeeting.startTime.startTimeHours === currentMeeting.endTime.endTimeHours &&
                nextMeeting.startTime.startTimeMinutes < currentMeeting.endTime.endTimeMinutes) ||
                nextMeeting.startTime.startTimeHours < currentMeeting.endTime.endTimeHours){
                  // console.log('clash for ', nextMeeting);

                    meetingsArray.splice(j,1);
                }
            }
          }
        }


      }

      const {meetingsArray} = useContext(MeetingsArrayContext);
    useEffect(()=>checkClashes(meetingsArray), [meetingsArray])
  return <></>;
};

export default CheckClashes;
