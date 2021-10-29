enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, Role];
} = {
  // const person = {
  name: "Jimmy",
  age: 30,
  hobbies: ["Sport", "Muziek"],
  role: [2, Role.AUTHOR]
};

let favoriteActivities: string[];
favoriteActivities = ["Fietsen"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
