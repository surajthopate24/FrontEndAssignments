const person = {
    firstName : "Suraj",
    lastName : "Thopate",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName +" "+ this.middleName +" "+ this.lastName + '.');
    }
};

document.write(person.firstName + " ");
person.middleName = "Ganpat";
document.write(person.middleName + "  ");
document.write(person.lastName);
console.log(person.greeting());