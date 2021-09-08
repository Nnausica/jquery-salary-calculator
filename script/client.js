$(document).ready(onReady);

function onReady(){

$(`#SubmitEmployeeInfo`).on(`click`, addEmployee);

};//end onReady



function addEmployee(){
    let newEmployee = {
        fName: $(`#FirstName`).val(), //value equals user input
        lName: $(`#LastName`).val(),
        id: $(`#IDnumber`).val(),
        jobTitle: $(`#jobTitle`).val(),
        salary: $(`#salary`).val(),  //value equals user input
        };//end object

        //add new rows to the table with the the user input added
    $(`#tableRow`).append(`<tr><td>`+newEmployee.fName+`</td>`+ 
                            `<td>`+newEmployee.lName+`</td>`+ 
                            `<td>`+newEmployee.id+`</td>`+ 
                            `<td>`+newEmployee.jobTitle+`</td>`+ 
                            `<td id="salary">`+newEmployee.salary+`</td></tr>`)

    $(`#FirstName`).val(``); $(`#LastName`).val(``); $(`#IDnumber`).val(``); $(`#jobTitle`).val(``); $(`#salary`).val(``);

};



// The application should have an input form - capture this click event.... 
//  collects _employee first name, 
//  last name, 
//  ID number, 
//  job title, 
//  annual salary

// A 'Submit' button should collect the form information, 
//append information to the DOM and clear the input fields. 

//store the information to calculate monthly costs, 

//Using the stored information, calculate monthly costs and append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.