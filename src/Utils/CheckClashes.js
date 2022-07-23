import React, { useEffect } from "react";

/*
  1. Check if there's any clash in the sorted descriptionArray
  2. If there's a clash, remove the 2nd meeting
  3. A clash is said to occur if
      a. Next meeting's start hour and current meetings end hour is same and next meeting's start minutes is less than current meeting's end minutes
                  OR
      b. Next meeting's start hour is less than current meeting's end hour
*/

const CheckClashes = (props) => {
    function checkClashes(descriptionArray){
        for(let i=0;i<descriptionArray.length-1;i++){
          for(let j=i+1;j<descriptionArray.length;j++){
            const currentMeeting = descriptionArray[i], nextMeeting = descriptionArray[j];

            if(nextMeeting.startTime.startTimeHours > currentMeeting.endTime.endTimeHours){
              // No clash
              continue;
            }
            else{
              if((nextMeeting.startTime.startTimeHours === currentMeeting.endTime.endTimeHours &&
                nextMeeting.startTime.startTimeMinutes < currentMeeting.endTime.endTimeMinutes) ||
                nextMeeting.startTime.startTimeHours < currentMeeting.endTime.endTimeHours){
                  // console.log('clash for ', nextMeeting);

                    descriptionArray.splice(j,1);
                }
            }
          }
        }


      }
    useEffect(()=>checkClashes(props.descriptionArray), [props.descriptionArray])
  return <></>;
};

export default CheckClashes;
