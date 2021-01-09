import { useEffect } from "react";

const Classes = ({ userId }) => {
   useEffect(() => {}, []);
   return (
      <div className="view">
         <div className="classes">
            <div className="classes__navbar">
               <h2 className="classes__navbar-title">Classes</h2>
               <button className="classes_navbar-button">+</button>
            </div>
         </div>
      </div>
   );
};
export default Classes;
