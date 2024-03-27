// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Igal",
//   age: 25,
// };

// const admin = 0;
// const readOnly = 1;
// const viewer = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Igal",
  age: 25,
  hobbies: ["Coding, PS5, Gym"],
  role: Role.ADMIN,
};
console.log(person.name);

let favoriteActivities: [string, number];
favoriteActivities = ["Gym", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log(`This user is admin`);
}
