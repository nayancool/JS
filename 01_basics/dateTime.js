let myDate = new Date()
// console.log(typeof myDate); // object

// console.log(myDate.toString()); // help in more readble
//console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

let myCrDate = new Date(2024, 0, 27);   
//console.log(myCrDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 is beacuse months start with 0.
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` // string interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    
})