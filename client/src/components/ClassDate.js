import { MongooseDocument } from "mongoose";
import { useState } from "react";
import DateAttendance from "./DateAttendance";

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
            <button
               className={
                  "class-date__button " +
                  (active && "class-date__button--active")
               }
            >
               {active ? "-" : "+"}
            </button>
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
