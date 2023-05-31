//1
let students = [];

const student1 = {
    name: "John",
    age: 19,
    kurs: "math",
  };

  const student2 = {
    name: "Vlad",
    age: 21,
    kurs: "chemistry",
  };

  const student3 = {
    name: "Dmitriy",
    age: 22,
    kurs: "biology",
  };

 students.push(student1,student2,student3);
 console.log(students); 

 //2
 console.log(students[1].name);

 //3
students[2].age = 24;
console.log(students[2].age);

//4
students[0].city = "Kiev";
console.log(students[0]);

//5
students.forEach(el => console.log(el.name));


