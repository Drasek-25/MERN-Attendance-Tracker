import { PromiseProvider } from "mongoose";
import { useState, useEffect } from "react";
import axios from "axios";

const IndividualClass = (props) => {
   const [indClass, setIndClass] = useState();

   useEffect(() => {
      console.log("test");
      const getClasses = () => {
         const classesRoute = "http://localhost:8080/class";
         axios.get(classesRoute, { withCredentials: true }).then((res) => {
            const classes = res.data.classes;
            const currentClass = classes.filter(
               (clas) => clas._id === props.match.params.classId
            );
            setIndClass(...currentClass);
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
                  <button className="classes_navbar-button">+</button>
               </div>
               <div className="classes__card-container">
                  {indClass.dates.map((date) => {
                     return (
                        <div className="class-date" key={date._id}>
                           <span className="class-date__text">{date.date}</span>
                           <button className="class-date__button" />
                        </div>
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};
export default IndividualClass;
