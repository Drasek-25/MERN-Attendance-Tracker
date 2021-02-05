const ClassCardMenu = ({ handleEditClassButton, students, classTitle }) => {
   return (
      <div className="class-card-menu">
         <div className="class-card-menu__container">
            <button
               className="class-card-menu__button"
               onClick={() => handleEditClassButton(students, classTitle)}
            >
               Edit Class
            </button>
            <button className="class-card-menu__button">Delete Class</button>
         </div>
      </div>
   );
};

export default ClassCardMenu;
