module.exports.Classes = {
   teacher: ObjectId(),
   classes: [
      {
         name: "Class 1",
         enrolledStudents: [
            {
               name: "Patrick",
               name: "Adrian",
               name: "Kaori",
               name: "Kim",
               name: "Kory",
               name: "Dalton",
            },
         ],
         dates: [
            {
               date: "05 October 2020 14:48 UTC",
               students: [
                  {
                     name: "Patrick",
                     attended: true,
                  },
                  {
                     name: "Adrian",
                     attended: false,
                  },
                  {
                     name: "Kaori",
                     attended: true,
                  },
                  {
                     name: "Kim",
                     attended: false,
                  },
                  {
                     name: "Kory",
                     attended: true,
                  },
                  {
                     name: "Dalton",
                     attended: true,
                  },
               ],
            },
            {
               date: "07 October 2011 14:48 UTC",
               students: [
                  {
                     name: "Patrick",
                     attended: true,
                  },
                  {
                     name: "Adrian",
                     attended: true,
                  },
                  {
                     name: "Kaori",
                     attended: false,
                  },
                  {
                     name: "Kim",
                     attended: true,
                  },
                  {
                     name: "Kory",
                     attended: false,
                  },
                  {
                     name: "Dalton",
                     attended: true,
                  },
               ],
            },
         ],
      },
      {
         name: "Class 2",
         enrolledStudents: [
            {
               name: "Patrick",
               name: "Adrian",
               name: "Kaori",
               name: "Kim",
               name: "Kory",
               name: "Dalton",
            },
         ],
         dates: [
            {
               date: "05 October 2011 14:48 UTC",
               students: [
                  {
                     name: "Patrick",
                     attended: true,
                  },
                  {
                     name: "Adrian",
                     attended: false,
                  },
                  {
                     name: "Kaori",
                     attended: true,
                  },
                  {
                     name: "Kim",
                     attended: false,
                  },
                  {
                     name: "Kory",
                     attended: true,
                  },
                  {
                     name: "Dalton",
                     attended: true,
                  },
               ],
            },
            {
               date: "07 October 2011 14:48 UTC",
               students: [
                  {
                     name: "Patrick",
                     attended: true,
                  },
                  {
                     name: "Adrian",
                     attended: true,
                  },
                  {
                     name: "Kaori",
                     attended: false,
                  },
                  {
                     name: "Kim",
                     attended: true,
                  },
                  {
                     name: "Kory",
                     attended: false,
                  },
                  {
                     name: "Dalton",
                     attended: true,
                  },
               ],
            },
         ],
      },
   ],
};
