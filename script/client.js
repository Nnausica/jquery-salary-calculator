$(document).ready(onReady);

function onReady(){
$(`#SubmitEmployeeInfo`).on(`click`, addEmployee);
$(`#SubmitEmployeeInfo`).on(`click`, addSalary);

};//end onReady

let employees=[];

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
                            `<td id="salary">`+newEmployee.salary+`</td>`+
                            `<td id="delete">` + `<button id="deleteEmployeeInfo">Delete</button></td></tr>`)
                        

    $(`#FirstName`).val(``); $(`#LastName`).val(``); $(`#IDnumber`).val(``); $(`#jobTitle`).val(``); $(`#salary`).val(``); //emptys the entry field

    employees.push(newEmployee); // adds newly entered employee to the array
};

payroll=[];

function addSalary(){
    payroll.push(employees[employees.length-1].salary)

    total = 0

    for(i=0; i<payroll.length; i++){
        total += payroll[i]
    }

    $(`#calculation`).empty().val(``); //emptys previous salary number 
    $(`#calculation`).append(`Salary =`+ total); //appends with new  number

    //if (total > 20,000){$(`#.red`)}
}; //end addSalary
////// THIS IS ALL STRINGS, HOW DO I MAKE IT NUMBERS????/////


//store the information to calculate monthly costs, 
//Using the stored information, calculate monthly costs and append this to the to DOM. 
//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.


// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
function deleteEmployee(){
    //on delete button click
    $(`#someotherexistingbutton`).on('click', "deleteEmployeeInfo", deleteEmployee) //THIS NEEDS TO GO SOMEWHERE?
      //link to other button?
    $(this).parent().remove()
    // remove the whole row of the table. 
}
