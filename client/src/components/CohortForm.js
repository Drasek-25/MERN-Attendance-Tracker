import { text } from "body-parser";
import { useState, useEffect } from "react";
import checkMark from "../data/images/green-checkmark-line.svg";

const CohortForm = ({ setActiveForm }) => {
   const initialForm = {
      name: "",
      students: "",
   };
   const [form, setForm] = useState(initialForm);

   const handleFormInput = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
   };

   const handleSubmitButton = () => {
      console.log("test");
      setActiveForm(false);
   };

   return (
      <div className="cohort-form">
         <div className="cohort-form__container">
            <h3 className="cohort-form__field-title">Class Name:</h3>
            <input
               className="cohort-form__field"
               id="name"
               autoFocus={true}
               value={form.name}
               onChange={(e) => handleFormInput(e)}
            ></input>
            <h3 className="cohort-form__field-title">Students:</h3>
            <span className="cohort-form__field-details">
               Seperate student names with commas.
            </span>
            <textarea
               className="cohort-form__field"
               id="students"
               value={form.students}
               onChange={(e) => handleFormInput(e)}
            ></textarea>
            <button
               className="cohort-form__submit-button"
               onClick={handleSubmitButton}
            >
               ✓
            </button>
         </div>
      </div>
   );
};
export default CohortForm;
