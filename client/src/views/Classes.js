import { useEffect, useState } from "react";
import axios from "axios";

import ClassCard from "../components/ClassCard";
import CohortForm from "../components/CohortForm";
import plusIcon from "../data/images/plus.svg";

const Classes = () => {
   const [classes, setClasses] = useState();
   const [activeForm, setActiveForm] = useState(false);
   const initialEditFormData = {
      classTitle: null,
      students: null,
   };
   const [editFormData, setEditFormData] = useState(initialEditFormData);

   const handleAddClassButton = () => {
      setActiveForm(!activeForm);
   };

   const handleEditClassButton = (students, classTitle) => {
      //FIGURE OUT HOW TO DEAL WITH SETEDITFORM DATA RACE CONDITION WITH ACTIVE FORM INITIALDATA
      setEditFormData({ classTitle: classTitle, students: students });
      console.log(editFormData.students, editFormData.classTitle);
      setActiveForm(true);
      setEditFormData(initialEditFormData);
   };

   useEffect(() => {
      const getClasses = () => {
         const classesRoute = "http://localhost:8080/class";
         axios.get(classesRoute, { withCredentials: true }).then((res) => {
            console.log(res);
            setClasses(res.data.classes);
         });
      };
      getClasses();
   }, []);

   return (
      <div className="view">
         {activeForm && (
            <CohortForm
               setActiveForm={setActiveForm}
               classTitle={editFormData.classTitle || ""}
               students={editFormData.students || ""}
            />
         )}
         <div className="classes">
            <div className="classes__navbar">
               <h2 className="classes__navbar-title">Classes</h2>
               <button
                  className="classes__navbar-add-button"
                  onClick={handleAddClassButton}
               >
                  <img src={plusIcon} className="classes__navbar-button-icon" />
               </button>
            </div>
            <div className="classes__card-container">
               {classes &&
                  classes.map((clas) => {
                     return (
                        <ClassCard
                           classTitle={clas.name}
                           students={clas.enrolledStudents}
                           key={clas._id}
                           classId={clas._id}
                           handleEditClassButton={handleEditClassButton}
                        />
                     );
                  })}
            </div>
         </div>
      </div>
   );
};
export default Classes;
