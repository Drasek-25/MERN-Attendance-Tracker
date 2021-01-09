const ClassCard = ({ classTitle, students }) => {
   return (
      <div className="class-card">
         <div className="class-card__header">
            <h2 className="class-card__title">{classTitle}</h2>
            <button className="class-card__button">...</button>
         </div>
         <h3 className="class-card__subtitle">Students</h3>
         <div className="class-card__student-container">
            {students.map((student) => {
               return (
                  <span className="class-card__student" key={student._id}>
                     {student.name}
                  </span>
               );
            })}
         </div>
      </div>
   );
};
export default ClassCard;
