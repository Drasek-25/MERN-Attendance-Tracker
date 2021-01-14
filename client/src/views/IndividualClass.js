import { PromiseProvider } from "mongoose";
import { useState, useEffect } from "react";
import axios from "axios";
import ClassDate from "../components/ClassDate";

const IndividualClass = (props) => {
   const [allClasses, setAllClasses] = useState();
   const [indClass, setIndClass] = useState();

   const handleAddClassDate = () => {
      console.log("click!");
      const newClass = {
         date: new Date().toISOString(),
         students: indClass.enrolledStudents,
      };
      const updatedClass = indClass;
      updatedClass.dates.unshift(newClass);
      console.log(updatedClass);
      setIndClass(updatedClass);
      setAllClasses({ ...allClasses, updatedClass });
   };

   useEffect(() => {
      const getClasses = () => {
         const classesRoute = "http://localhost:8080/class";
         axios.get(classesRoute, { withCredentials: true }).then((res) => {
            const classes = res.data.classes;
            console.log("allClasses: ", classes);
            setAllClasses(classes);

            const currentClass = classes.filter(
               (clas) => clas._id === props.match.params.classId
            )[0];

            console.log("indClass: ", currentClass);
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
                  <button
                     className="classes_navbar-button"
                     onClick={handleAddClassDate}
                  >
                     +
                  </button>
               </div>
               <div className="classes__card-container">
                  {indClass.dates.map((date) => {
                     return (
                        <ClassDate
                           key={date.date}
                           classDate={date}
                           handleAddClassDate={handleAddClassDate}
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
