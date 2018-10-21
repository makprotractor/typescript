var stud = {
    Name: "Partha",
    Age: 301,
    Phone: 911
};
var studentsList = [
    { Name: "Prasanth", Age: 26, Phone: 12344 },
    { Name: "Krishna", Age: 30, Phone: 32434 },
    { Name: "Geetha", Age: 35, Phone: 2346787 }
];
studentsList.push(stud);
for (var i = 0; i < studentsList.length; i++) {
    var element = studentsList[i];
    console.log(element);
}
