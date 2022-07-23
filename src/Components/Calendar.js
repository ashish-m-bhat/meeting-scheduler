import React from "react";
import CheckClashes from "../Utils/CheckClashes";
import CreateMeetingDivs from "../Utils/CreateMeetingDivs";
import CreateTimingDivs from "../Utils/CreateTimingDivs";
import Preprocess from "../Utils/Preprocess";
import SortMeetings from "../Utils/SortMeetings";
import '../UI/Calendar.css';

/*
  1. Precrocess the meetings array
  2. Sort the meetings acc to starting time
  3. Check for clashes. If any, remove the 2nd one
  4. Create the div and divs for marking times
  5. Create div and divs for showing the meetings
*/
const Calendar = (props) => {

  return (
    <div id="mainContainerDiv">
      <Preprocess descriptionArray={props.descriptionArray} />
      <SortMeetings descriptionArray={props.descriptionArray} />
      <CheckClashes descriptionArray={props.descriptionArray} />
      <CreateTimingDivs descriptionArray={props.descriptionArray} />
      <CreateMeetingDivs descriptionArray={props.descriptionArray} />
    </div>
  );
};

export default Calendar;
