// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object
//month starts from 0 to 11
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // (june = 5)+ 1 = 6
// console.log(newDate.getDay()); //friday = 5

// custom date format
newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
})
