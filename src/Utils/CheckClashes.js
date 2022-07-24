/*
  1. Check if there's any clash in the sorted meetingsArray
  2. If there's a clash, remove the 2nd meeting
  3. A clash is said to occur if
      a. Next meeting's start hour and current meetings end hour is same and next meeting's start minutes is less than current meeting's end minutes
                  OR
      b. Next meeting's start hour is less than current meeting's end hour
*/


export default function checkClashes(meetingsArray){
    for(let i=0;i<meetingsArray.length-1;i++){
      let j=i+1;
      while(meetingsArray.length >=1 && j < meetingsArray.length){
        const currentMeeting = meetingsArray[i], nextMeeting = meetingsArray[j];

        if(nextMeeting.startTime.startTimeHours > currentMeeting.endTime.endTimeHours){
          // No clash
          j++;
          continue;
        }
        else{ // Next meeting's start hour and current meetings end hour is same and next meeting's start minutes is less than current meeting's end minutes
          if((nextMeeting.startTime.startTimeHours === currentMeeting.endTime.endTimeHours && nextMeeting.startTime.startTimeMinutes < currentMeeting.endTime.endTimeMinutes)
                                                      ||
            nextMeeting.startTime.startTimeHours < currentMeeting.endTime.endTimeHours){ //Next meeting's start hour is less than current meeting's end hour
              // console.log('clash for ', nextMeeting);
              // Remove the meeting
              meetingsArray.splice(j,1);
            }
        }
      }
    }


  }