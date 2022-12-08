const users = [
  {
      name: "Alex",
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 45,
      isLoggedIn: false,
      points: 30
    },
  {
      name: "Job",
      email: 'job@job.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
  {
      name: 'Brook',
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 39,
      isLoggedIn: true,
      points: 50
    },
  {
      name: 'Daniel',
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 25,
      isLoggedIn: false,
      points: 40
    },
  {
      name: 'John',
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
  {
      name: 'Thomas',
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 18,
      isLoggedIn: false,
      points: 40
    },
  {
      name:  'Paul',
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 40
    }
  ]
  // console.log(users[2]);
  //Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
  let  a = 0
  for (i = 0; i < users.length; i++){
    if (a < users[i].skills.length){
      a = users[i].skills.length
      b = i 
    }
  }
  console.log(users[b]);
  //Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
  console.log(users.length);
  let Too = 0
  for (i = 0; i < users.length; i++){
    if (50 < users[i].points){
      too ++
    }
  }
  console.log(Too);
  // Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
  for (i = 0; i < users.length; i++){
    if (users[i].skills.includes("MongoDB") && users[i].skills.includes("Express") && users[i].skills.includes("React") && users[i].skills.includes("Node")){
      console.log(users[i]);
    }
  }
// Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх