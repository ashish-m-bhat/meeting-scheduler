import React, { useContext, useState } from "react";
import SortMeetings from "../../Utils/SortMeetings";
import CheckClashes from "../../Utils/checkClashes";
import DisplayTimings from "../DisplayTimings/DisplayTimings";
import DisplayMeetings from "../DisplayMeetings/DisplayMeetings";
import { useLocation } from "react-router";
import { MeetingsArrayContext } from "../../Context/MeetingsArrayContextProvider";
import cssClasses from './MeetingRoom.module.css';
import NewMeeting from "../NewMeeting/NewMeeting";

/*
  0. Get the meetingsArray from the context api using the roomid. roomid is obtained from the url
  1. Precrocess the meetings array
  2. Sort the meetings acc to starting time
  3. Check for clashes. If any, remove the 2nd one
  4. Create the div and divs for marking times
  5. Create div and divs for showing the meetings
*/
const MeetingRoom = () => {
  const [refreshMeetings, setRefreshMeetings] = useState();
  const {pathname} = useLocation();
  let roomId;
  if(pathname === '/')
    roomId='room1';
  else{
    roomId=pathname.substring(1);
  }

  const {meetingsArrayObject} = useContext(MeetingsArrayContext);

  return (
    <div className={cssClasses.mainContainerDiv}>
      <DisplayTimings />
      <SortMeetings meetingsArray={meetingsArrayObject[roomId]}/>
      <DisplayMeetings meetingsArray={meetingsArrayObject[roomId]} roomId={roomId} setRefreshMeetings={setRefreshMeetings} />
      <NewMeeting setRefreshMeetings={setRefreshMeetings} meetingsArray={meetingsArrayObject[roomId]} roomId={roomId} />
    </div>
  );
};

export default MeetingRoom;
