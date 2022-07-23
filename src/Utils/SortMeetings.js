import React, { useContext, useEffect } from "react";
import { MeetingsArrayContext } from "../Context/MeetingsArrayContextProvider";

// Sort the meetings acc to the starting time
const SortMeetings = () => {
  function sortMeetings(meetingsArray) {
    meetingsArray.sort(
      (a, b) => a.startTime.startTimeHours - b.startTime.startTimeHours
    );
  }

  const {meetingsArray} = useContext(MeetingsArrayContext);
  useEffect(() => sortMeetings(meetingsArray), [meetingsArray]);
  return <></>;
};

export default SortMeetings;
