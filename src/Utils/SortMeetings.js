import React, { useEffect } from "react";

// Sort the meetings acc to the starting time
const SortMeetings = (props) => {
  function sortMeetings(descriptionArray) {
    descriptionArray.sort(
      (a, b) => a.startTime.startTimeHours - b.startTime.startTimeHours
    );
  }
  useEffect(() => sortMeetings(props.descriptionArray), [props.descriptionArray]);
  return <></>;
};

export default SortMeetings;
