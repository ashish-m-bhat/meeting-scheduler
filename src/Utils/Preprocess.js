import React, { useEffect } from "react";

// Helper function. Returns an object fo hour and mins
const getHoursMinutes = (arr) => {
  let hours = 0,
    minutes = 0;

  if (arr[arr.length - 2] === "a" && arr[0] === '1' && arr[1] === '2') {
    // For 12am, subtract 12hrs. So later it would be nullified
      hours -= 12;
  }
  if (arr[arr.length - 2] === "p") {
    // For 12pm, don't add 12 hrs
    if(!(arr[0] === '1' && arr[1] === '2'))
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

const preprocess = (meetingsArray) => {
  for (let i = 0; i < meetingsArray.length; i++) {
    const currentMeeting = meetingsArray[i];
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
}

export default preprocess;
