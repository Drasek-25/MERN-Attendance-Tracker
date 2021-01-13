import { useState } from "react";
import greenCheck from "../data/images/green-checkmark-line.svg";
import redXCheck from "../data/images/red-x-line.svg";

const DateAttendance = ({ student, transition }) => {
   const [inAttendance, setInAttendance] = useState(true);
   const handleClick = () => {
      setInAttendance(!inAttendance);
   };

   return (
      <div
         className={
            "date-attendance__row " +
            (transition && "date-attendance__row--active")
         }
      >
         <img
            src={greenCheck}
            className={
               "date-attendance__button " +
               (inAttendance
                  ? "date-attendance__button--active"
                  : "date-attendance__button--inactive")
            }
            onClick={handleClick}
         />
         <img
            src={redXCheck}
            className={
               "date-attendance__button " +
               (!inAttendance
                  ? "date-attendance__button--active"
                  : "date-attendance__button--inactive")
            }
            onClick={handleClick}
         />
         <span>{student.name}</span>
      </div>
   );
};
export default DateAttendance;
