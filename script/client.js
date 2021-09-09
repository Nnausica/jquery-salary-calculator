$(document).ready(onReady);

function onReady(){
$(`#SubmitEmployeeInfo`).on(`click`, addEmployee);
$(`#SubmitEmployeeInfo`).on(`click`, addSalary);
$(`#table`).on('click', `.deleteEmployeeInfo`, deleteEmployee)
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
    $(`#table`).append(`<tr><td>`+newEmployee.fName+`</td>`+ 
                            `<td>`+newEmployee.lName+`</td>`+ 
                            `<td>`+newEmployee.id+`</td>`+ 
                            `<td>`+newEmployee.jobTitle+`</td>`+ 
                            `<td id="salary">`+newEmployee.salary+`</td>`+
                            `<td id="delete">` + `<button class="deleteEmployeeInfo">Delete</button></td></tr>`)
                        

    $(`#FirstName`).val(``); $(`#LastName`).val(``); $(`#IDnumber`).val(``); $(`#jobTitle`).val(``); $(`#salary`).val(``); //emptys the entry field

    employees.push(newEmployee); // adds newly entered employee to the array
};


//store the information to calculate monthly costs
//create an array to store payroll info
payroll=[];

//Using the stored information, calculate monthly costs and append this to the to DOM. 
function addSalary(){
    payroll.push(employees[employees.length-1].salary)

    total = 0

    for(i=0; i<payroll.length; i++){
        total += (Number(payroll[i]))/12;
    }

    $(`#calculation`).empty().val(``); //emptys previous salary number 
    $(`#calculation`).append(`Total Monthly Salary =`+ total); //appends with new  number

    console.log(`total`, total);

    //If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
    if (total >= 20000){ 
    $(`#calculation`).toggleClass( `red` )};
}; //end addSalary


// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
function deleteEmployee(){
    //on delete button click
      //link to other button?
    $(this).parent().parent().remove();
    console.log(`help tacos`);
    // remove the whole row of the table. 
}
