import { useHistory } from "react-router-dom";
import { useState } from "react";

import ClassCardMenu from "./ClassCardMenu";

const ClassCard = ({
   classTitle,
   students,
   classId,
   handleEditClassButton,
}) => {
   const [activeMenu, setActiveMenu] = useState(false);
   const handleMeatballMenu = (e) => {
      e.stopPropagation();
      setActiveMenu(!activeMenu);
   };
   const history = useHistory();
   const handleCardClick = () => {
      if (activeMenu) setActiveMenu(!activeMenu);
      if (!activeMenu) history.push(`/class/${classId}`);
   };
   return (
      <div className="class-card" onClick={handleCardClick}>
         {activeMenu && (
            <ClassCardMenu
               handleEditClassButton={handleEditClassButton}
               students={students}
               classTitle={classTitle}
            />
         )}
         <div className="class-card__header">
            <h2 className="class-card__title">{classTitle}</h2>
            <button
               className="class-card__button"
               onClick={(e) => handleMeatballMenu(e)}
            >
               ...
            </button>
         </div>

         <h3 className="class-card__subtitle">Students</h3>
         <div className="class-card__student-container">
            {students.map((student, i) => {
               return (
                  <span className="class-card__student" key={student._id}>
                     {student.name}
                     {students.length - 1 !== i && ","}
                  </span>
               );
            })}
         </div>
      </div>
   );
};
export default ClassCard;
