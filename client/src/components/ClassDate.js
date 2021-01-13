import { useState } from "react";
import DateAttendance from "./DateAttendance";

const ClassDate = ({ classDate }) => {
   const [active, setActive] = useState(false);

   const handleClick = () => {
      setActive(!active);
   };

   return (
      <>
         <div className="class-date" key={classDate._id} onClick={handleClick}>
            <span className="class-date__text">{classDate.date}</span>
            <button className="class-date__button">{active ? "-" : "+"}</button>
         </div>
         {active && <DateAttendance students={classDate.students} />}
      </>
   );
};
export default ClassDate;
