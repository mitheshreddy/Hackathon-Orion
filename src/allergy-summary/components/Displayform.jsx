import React from 'react';

const Displayform = () => (
  <div className="panelcontent">
    <h1 className="apptform"> Appointment Form </h1><br /> <br />
   Name: <input type="text" /><br /><br />
   Age: <input type="number" max="100" /><br /><br />
   Gender: <input type="radio" name="gender" value="option1" /> Male
           <input type="radio" name="gender" value="option1" /> Female<br /><br />
   Phone-no: <input type="text" /> <br /><br />
   Reason for Appointment: <textarea>Enter your reason here</textarea><br /><br />
    <input type="button" value="submit" className="Search" />
  </div>);

export default Displayform;
