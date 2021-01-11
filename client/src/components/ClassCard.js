import { useHistory } from "react-router-dom";

const ClassCard = ({ classTitle, students, classId }) => {
   const history = useHistory();
   const handleCardClick = () => {
      history.push(`/class/${classId}`);
   };
   return (
      <div className="class-card" onClick={handleCardClick}>
         <div className="class-card__header">
            <h2 className="class-card__title">{classTitle}</h2>
            <button className="class-card__button">...</button>
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
