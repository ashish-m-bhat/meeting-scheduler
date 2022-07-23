import React, { useEffect } from 'react';
import './CreateTimingDivs.css';

/*
  1. Create a main div timingsDiv. This will be appended to the mainContainerDiv
  2. For the each hour of the day, create a div and set the properties
*/

const CreateTimingDivs = (props) => {
    const createTimingDivs = () =>{

        // Create the outer div
        const timingsDiv = document.createElement('div');
        timingsDiv.setAttribute('id', 'timingsDiv');

        const timesArray = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
                            '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
                            '20:00', '21:00', '22:00', '23:00', '24:00'];

        timesArray.forEach((eachTime, index) =>{
            // Create a div for each hour
            const timingDiv = document.createElement('div');
            timingDiv.setAttribute('id', eachTime);
            timingDiv.setAttribute('class', 'timingDiv');

            // Set the top  property
            const topSpace = index*25 + "px";
            timingDiv.style.top = topSpace;

            // Set inner contents
            timingDiv.textContent = eachTime;

            // Finally append the div
            timingsDiv.appendChild(timingDiv);
        });
        document.getElementById('mainContainerDiv').appendChild(timingsDiv);

    }
    useEffect(()=>createTimingDivs(),[])
  return (
    <></>
  )
}

export default CreateTimingDivs;