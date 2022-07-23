import React from 'react';
import EachTiming from './EachTiming';
import cssClasses from './DisplayTimings.module.css';

/*
  1. Create a main div timingsDiv.
  2. For the each hour of the day, create a div
*/

const DisplayTimings = () => {
  const timesArray = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
                            '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
                            '20:00', '21:00', '22:00', '23:00', '24:00'];

  let index=0;
  return (
    <div className={cssClasses.timingsDiv}>
      {   timesArray.map(eachTiming =>{
          return(
            <EachTiming key={Math.random()*1000} timing={eachTiming} index={index++}/>
          )
        })
      }
    </div>

  )
}

export default DisplayTimings;