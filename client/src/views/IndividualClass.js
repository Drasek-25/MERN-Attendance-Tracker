import { useState, useEffect } from "react";
import axios from "axios";
import ClassDate from "../components/ClassDate";
import plusIcon from "../data/images/plus.svg";
import saveIcon from "../data/images/floppy-disk.svg";

const IndividualClass = (props) => {
   const [allClasses, setAllClasses] = useState();
   const [indClass, setIndClass] = useState();

   const handleAddClassDate = () => {
      console.log("click!");
      const newClass = {
         date: new Date().toISOString(),
         students: [...indClass.enrolledStudents],
      };
      const updatedClass = { ...indClass };
      updatedClass.dates.unshift(newClass);
      console.log(updatedClass);
      setIndClass(updatedClass);
      setAllClasses({ ...allClasses, updatedClass });
   };

   const handleDeleteClassDate = (e, date) => {
      e.stopPropagation();
      // console.log(date);
      const currentClass = { ...indClass };
      const remainingDates = currentClass.dates.filter(
         (classDate) => classDate.date !== date
      );
      currentClass.dates = remainingDates;
      // console.log(currentClass);
      setIndClass(currentClass);
   };
   const handleUpdateClassDate = (newDate, oldDate) => {
      const currentClass = { ...indClass };
      const classDates = currentClass.dates.map((date) => {
         if (date.date === oldDate) {
            date.date = newDate;
         }
         return date;
      });
      currentClass.dates = classDates;
      setIndClass(currentClass);
   };

   useEffect(() => {
      const getClasses = () => {
         const classesRoute = "http://localhost:8080/class";
         axios.get(classesRoute, { withCredentials: true }).then((res) => {
            const classes = res.data.classes;
            // console.log("allClasses: ", classes);
            setAllClasses(classes);

            const currentClass = classes.filter(
               (clas) => clas._id === props.match.params.classId
            )[0];

            // console.log("indClass: ", currentClass);
            setIndClass(currentClass);
         });
      };
      getClasses();
   }, []);

   return (
      <div className="view">
         {indClass && (
            <div className="classes">
               <div className="classes__navbar">
                  <h2 className="classes__navbar-title">{indClass.name}</h2>
                  <div className="classes__navbar-button-row">
                     <button
                        className="classes__navbar-save-button"
                        onClick={handleAddClassDate}
                     >
                        <img
                           src={saveIcon}
                           className="classes__navbar-button-icon"
                        />
                     </button>
                     <button
                        className="classes__navbar-add-button"
                        onClick={handleAddClassDate}
                     >
                        <img
                           src={plusIcon}
                           className="classes__navbar-button-icon"
                        />
                     </button>
                  </div>
               </div>
               <div className="classes__card-container">
                  {indClass.dates.map((date) => {
                     return (
                        <ClassDate
                           key={date.date}
                           classDate={date}
                           handleAddClassDate={handleAddClassDate}
                           handleDeleteClassDate={handleDeleteClassDate}
                           handleUpdateClassDate={handleUpdateClassDate}
                        />
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};
export default IndividualClass;
