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

function deleteEmployee(){
    //on delete button click
    // $('#someotherexsistingbuttonclick').on('click', "deleteEmployeeInfo", deleteEmployee) THIS NEEDS TO GO SOMEWHERE?
      //link to other button?
    $(this).parent().remove()
    // remove the whole row of the table. 
  
}

function addSalary(){
    let total=0

    for (i=0; i<employees.length; i++){
        total += employees[i].salary
    };
    console.log(`total salary?`, total);

    $(`#calculation`).empty().val(``);
    $(`#calculation`).append(`Salary =`+ total);
}; //end addSalary

    // need to emtpy out content in #calculation
    // then append with new sum on submit button click



//store the information to calculate monthly costs, 

//Using the stored information, calculate monthly costs and append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.