import React, { useEffect } from "react";

// Sort the meetings acc to the starting time
const SortMeetings = (props) => {
  function sortMeetings(meetingsArray) {
    meetingsArray.sort(
      (a, b) => a.startTime.startTimeHours - b.startTime.startTimeHours
    );
  }

  useEffect(() => sortMeetings(props.meetingsArray), [props.meetingsArray]);
  return <></>;
};

export default SortMeetings;
