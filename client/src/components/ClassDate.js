import { useState } from "react";
import DateAttendance from "./DateAttendance";
import trashIcon from "../data/images/recycle-bin.svg";

const ClassDate = ({ classDate }) => {
   const [active, setActive] = useState(false);
   const [transition, setTransition] = useState(false);

   const handleClick = () => {
      setActive(!active);
      setTimeout(() => setTransition(!transition), 1);
   };
   const handleDate = (isoString) => {
      return new Date(isoString).toDateString();
   };

   return (
      <>
         <div
            className={
               "class-date " +
               (active ? "class-date--active" : "class-date--inactive")
            }
            key={classDate._id}
            onClick={handleClick}
         >
            <span className="class-date__text">
               {handleDate(classDate.date)}
            </span>
            <div className="class-date__button-container">
               <button className="class-date__delete-button">
                  <img src={trashIcon} className="class-date__delete-icon" />
               </button>
               <button
                  className={
                     "class-date__open-button " +
                     (active && "class-date__open-button--active")
                  }
               >
                  {active ? "-" : "+"}
               </button>
            </div>
         </div>
         {active && (
            <div
               className={
                  "date-attendance " + (transition && "date-attendance--active")
               }
            >
               {classDate.students.map((student) => {
                  return (
                     <DateAttendance
                        student={student}
                        transition={transition}
                     />
                  );
               })}
            </div>
         )}
      </>
   );
};
export default ClassDate;
