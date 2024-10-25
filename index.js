// Your code here
function createEmployeeRecord (employeeArray) {
    const employeeObj = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObj;
}

function createEmployeeRecords (array) {
    const newArray = [];
    array.forEach((input) => {
        newArray.push(createEmployeeRecord(input))
    });
    return newArray
}

function createTimeInEvent(employee, dateStamp) {
    const dateParts = dateStamp.split(" ");
    employee.timeInEvents.push({
        type: "TimeIn",
        date: dateParts[0],
        hour: parseInt(dateParts[1], 10),
    })
      return employee
}

function createTimeOutEvent(employee, dateStamp) {
    const dateParts = dateStamp.split(" ");
    employee.timeOutEvents.push({
        type: "TimeOut",
        date: dateParts[0],
        hour: parseInt(dateParts[1], 10),
    })
       return employee
}

function hoursWorkedOnDate(employee, soughtDate) {
    let inn = employee.timeInEvents.find((timeIn) => soughtDate === timeIn.date );
    let out = employee.timeOutEvents.find((timeOut) => soughtDate === timeOut.date );
    const sum = out.hour - inn.hour;
       let hours = sum / 100;
     return hours;
    
}

function wagesEarnedOnDate(employee, soughtDate) {
   // hoursWorkedOnDate(employee, soughtDate);
    let pay = hoursWorkedOnDate(employee, soughtDate) * employee.payPerHour;
    return pay;
}

function allWagesFor(employee) {
    let total = 0
    employee.timeInEvents.forEach((item) => {
        total += wagesEarnedOnDate(employee, item.date) 
    })
    return total;
}

function calculatePayroll(array) {
    let totalSum = 0
    array.forEach((employee) => {
        totalSum += allWagesFor(employee)
    })
    return totalSum;
}