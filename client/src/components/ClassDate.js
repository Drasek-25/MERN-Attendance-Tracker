import { useState } from "react";
import DateAttendance from "./DateAttendance";
import trashIcon from "../data/images/recycle-bin.svg";
import minusIcon from "../data/images/math-minus.svg";
import plusIcon from "../data/images/plus.svg";
import ellipsisIcon from "../data/images/ellipsis-h.svg";

const ClassDate = ({
   classDate,
   handleDeleteClassDate,
   handleUpdateClassDate,
}) => {
   const [active, setActive] = useState(false);
   const [transition, setTransition] = useState(false);
   const [editMode, setEditMode] = useState(false);

   const handleOpenStudentsMenu = () => {
      setActive(!active);
      setTimeout(() => setTransition(!transition), 1);
   };
   const dateConvertToString = (isoString) => {
      console.log(isoString);
      console.log(new Date(isoString).toDateString());
      return new Date(isoString).toDateString();
   };

   const handleEditMode = () => {
      setEditMode(!editMode);
   };
   const handleDateInput = (e) => {
      const updatedDate = new Date(e.target.value).toISOString();
      handleUpdateClassDate(updatedDate, classDate.date);
   };
   const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
         handleDateInput(e);
         handleEditMode();
      }
   };

   return (
      <>
         <div
            className={
               "class-date " +
               (active ? "class-date--active" : "class-date--inactive")
            }
            key={classDate._id}
         >
            {editMode ? (
               <input
                  className="class-date__date-input"
                  type="date"
                  onBlur={(e) => handleDateInput(e)}
                  onKeyDown={handleKeyDown}
               ></input>
            ) : (
               <span className="class-date__text">
                  {dateConvertToString(classDate.date)}
               </span>
            )}
            <div className="class-date__button-container">
               <button
                  className={
                     "class-date__open-button " +
                     (active && "class-date__open-button--active")
                  }
                  onClick={handleOpenStudentsMenu}
               >
                  <img
                     src={active ? minusIcon : plusIcon}
                     className="class-date__button-icon"
                  />
               </button>
               <button
                  className="class-date__edit-button"
                  onClick={handleEditMode}
               >
                  <img src={ellipsisIcon} className="class-date__button-icon" />
               </button>
               <button
                  className="class-date__delete-button"
                  onClick={(e) => handleDeleteClassDate(e, classDate.date)}
               >
                  <img src={trashIcon} className="class-date__delete-icon" />
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
