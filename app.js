'use strict';
let total = 0;
let studentId = 0;

function generateRandom(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}


const Student = function (email, phoneNumber, tuition) {
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.tuition = tuition;

    Student.allStudents.push(this)
}

Student.allStudents = [];



// Student.prototype.renderToTable = function () {

// }

// Student.renderToTable();

//  -------------------------------------------------

let gettingForm = document.getElementById("form");

gettingForm.addEventListener('submit', addToTable)

function addToTable(event) {
    event.preventDefault();

    let emailFromForm = event.target.studentEmail.value
    let numberFromForm = event.target.studentMobile.value
    let tuitionFromForm = event.target.tuition.value


    new Student(emailFromForm, numberFromForm, tuitionFromForm)
    setItem();



    let table = document.getElementById('studentTable');
    let row = document.createElement('tr')

    let createId = document.createElement('td')
    createId.textContent = studentId += 1

    let createName = document.createElement('td')
    createName.textContent = emailFromForm.split("@", 1);

    let createEmail = document.createElement('td')
    createEmail.textContent = emailFromForm

    let createMobile = document.createElement('td')
    createMobile.textContent = numberFromForm

    let createAge = document.createElement('td')
    createAge.textContent = generateRandom(18, 24);

    let createTuition = document.createElement('td')
    createTuition.textContent = tuitionFromForm

    row.appendChild(createId);
    row.appendChild(createName);
    row.appendChild(createEmail);
    row.appendChild(createMobile);
    row.appendChild(createAge);
    row.appendChild(createTuition);

    table.appendChild(row)

    let createtotal = document.getElementById('total')
    createtotal.textContent = " Total of Tuition: " + `${total += parseInt(tuitionFromForm)}`

}

// -------------------------------------------------------------


function setItem() {
    localStorage.setItem('addedStudents', JSON.stringify(Student.allStudents))
}


function getItem() {
    let getting = localStorage.getItem('addedStudents')
    let backToNormal = JSON.parse(getting)

    if (backToNormal !== null) {

        Student.allStudents = [];

        for (let i = 0; i < backToNormal.length; i++) {
            new Student(backToNormal[i].email, backToNormal[i].phoneNumber, backToNormal[i].tuition)
        }
    }
}

getItem();




