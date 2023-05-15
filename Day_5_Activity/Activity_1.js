//for
var json = {
    jsonData : {
        one : [11,12,13,14],
        two : [21,22,23]
    }
};
for(var key in json.jsonData){
    for(var key1 in json.jsonData[key]){
        console.log(json.jsonData[key][key1])
    }
}

//for in
var person = {
  fname: "Nick",
  lname: "Jonas",
  age: 26,
};
for (let x in person) {
  console.log(x + ": " + person[x]);
}

//for of
const object = { a:1 , b:2 , c:3 };
object.d = 4;
  for(const key of Object.keys(object)){
    console.log(key)
}

//forEach
var datesBooking = [{ date: "04/24/2023" }, { date: "04/25/2023" }];
datesBooking.forEach(function (data) {
  console.log(data);
});
