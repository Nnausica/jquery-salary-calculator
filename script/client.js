$(document).ready(onReady);

function onReady(){
  $(`#SubmitEmployeeInfo`).on('click', replaceFirstName);
  $(`#SubmitEmployeeInfo`).on(`click`, replaceLastName);
  $(`#SubmitEmployeeInfo`).on(`click`, replaceID);
  $(`#SubmitEmployeeInfo`).on(`click`, replaceTitle);
  $(`#SubmitEmployeeInfo`).on(`click`, replaceSalary);
}//end onReady

    // let fName = $(`#userFirstName`);
    // let lName = $(`#userLastName`);
    // let IDnumber = $(`#IDnumber`);
    // let jobTitle = $(`#jobTitle`);
    // let annualSalary= $(`#salary`);

function replaceFirstName(){
    let el= $(`#userFirstName`);
    el.empty();
    let inp= $(`#FirstName`).val();
    el.append(inp);
}//end replaceFirstName

function replaceLastName(){
    let el2= $(`#userLastName`);
    el2.empty();
    let inp= $(`#LastName`).val();
    el2.append(inp);
} //end replaceLastName

function replaceID(){
    let el3= $(`#userID`);
    el3.empty();
    let inp= $(`#IDnumber`).val();
    el3.append(inp);
} //end replaceID

function replaceTitle(){
    let el4= $(`#userTitle`);
    el4.empty();
    let inp= $(`#jobTitle`).val();
    el4.append(inp);
}//end replaceTitle

function replaceSalary(){
    let el5= $(`#userSalary`);
    el5.empty();
    let inp= $(`#salary`).val();
    el5.append(inp);
}// end replaceSalary

// The application should have an input form - capture this click event.... 
//  collects _employee first name, 
//  last name, 
//  ID number, 
//  job title, 
//  annual salary
// create an object? employee name, traits are the other items?



// A 'Submit' button should collect the form information, 
//append information to the DOM and clear the input fields. 

//store the information to calculate monthly costs, 

//Using the stored information, calculate monthly costs and append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.