const DateAttendance = ({ students }) => {
   return (
      <div>
         {students.map((student) => {
            return (
               <div>
                  <button></button>
                  <button></button>
                  <span>{student.name}</span>
               </div>
            );
         })}
      </div>
   );
};

export default DateAttendance;
