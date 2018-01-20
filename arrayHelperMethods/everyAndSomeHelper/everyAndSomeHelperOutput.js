var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 16},
    {name: 'Apple', ram: 32},
    {name: 'Lenovo', ram: 16}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

computers.every(function (computer) {
    return computer.ram > 16;
});

computers.some(function (computer) {
    return computer.ram > 16;
});

var names = ['Alexandria', 'Joe', 'Bob', 'Matthew'];

names.every(function (name) {
    return name.length > 4;
});

names.some(function (name) {
    return name.length > 4;
});

function Field(field) {
    this.field = field;
}

Field.prototype.validate = function () {
    return this.field.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthday = new Field('10/10/2010');

var allFieldsAreValid = false;

allFieldsAreValid = username.validate() && password.validate() && birthday.validate();

var fields = [username, password, birthday];

allFieldsAreValid = fields.every(function (field) {
    return field.validate();
});

if (allFieldsAreValid) {
// allow user to submit
} else {
// show an error message
}

console.log(allFieldsAreValid);



























































