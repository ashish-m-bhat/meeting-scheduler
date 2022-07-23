import React from "react";
import cssClasses from './EachTiming.module.css';

const EachTiming = ({ timing, index }) => {
  // Set the top  property
  const topSpace = index * 25 + "px";

  return (
      <div className={cssClasses.timingDiv} style={{'top':topSpace}}>
        {timing}
      </div>
  );
};

export default EachTiming;
