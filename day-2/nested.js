let user = {
  name: "nayan",
  age: 25,
  address: {
    city: "Rajshahi",
    area: "Upashahar",
    zipcode: 6000,
  },
};


// console.log(user.address.area);
// console.log(user["address"]['zipcode']);


let students = [
  {
    name: "Rahim",
    id: 101,
  },
  {
    name: "Fahim",
    id: 102,
  },
  {
    name: "Sahim",
    id: 103,
    address: {
      area: "Badda",
      thana: "Vatara",
      lane: "Embassy lane",
      option: ["victor", "dhaka caka"],
    },
  },
];

// console.log(students[2].address.option[1]);

console.log(`Sahim er area holo ${students[2].address.area} r tar bus er option holo 2 ta\n 1.${students[2].address.option[0]}\n 2.${students[2].address.option[1]}`);