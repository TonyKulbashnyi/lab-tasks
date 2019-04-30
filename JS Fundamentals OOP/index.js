const fix = document.querySelector('.fix');
const wage = document.querySelector('.wage');
const salary_month = document.querySelector('.salary_month');
const salary_per_hour = document.querySelector('.salary_per_hour');
const form = document.querySelector('.form');
const text_month = document.querySelector('.text_month');
const text_hour = document.querySelector('.text_hour');

// when we load our page we render example of our array
window.onload = function(){
    render(arr);
};

/*
    we must to create configuration with which
     if we want indicate fixed salary, we must choose fixed radio button
     and the same if we want indicate  salary per hour
     When we click did it, we can see not disabled input
 */
form.onchange = function() {
     if (fix.checked == true) {
         salary_month.removeAttribute('disabled');
         text_month.classList.remove('hidden');

     } else if (fix.checked == false){
         salary_month.setAttribute('disabled','disabled');
         text_month.classList.add('hidden');
    }
    if (wage.checked == true) {
        salary_per_hour.removeAttribute('disabled');
        text_hour.classList.remove('hidden');

    } else if (wage.checked == false){
        salary_per_hour.setAttribute('disabled','disabled');
        text_hour.classList.add('hidden');
    }
};



// main class
class Employee {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.id = Employee.id +=1;
    }
    // method of calc salary for employee
    salary_per_month() {
        if(this.salary) {
            // return this.salary;
        } else {
            return this.salary = 20.8*8* this.per_hour;
        }
    }
}
// class for wage employee
class Wage_employee extends Employee{
    constructor(name, surname, per_hour) {
        super(name, surname);
        this.per_hour = per_hour;
    }
}
// class for fix employee
class Fix_employee extends Employee{
    constructor(name, surname, salary) {
        super(name, surname, salary);
        this.salary = salary;
    }
}
// static data for indicate our employees
Employee.id = 0;


//creating array for collection emloyees
let arr = [];


/*
 example to creating new employees
 and and in order for a new page launch, it would not be empty
  */
arr[0] = new Fix_employee('John', "Carling", 15000);
arr[1] = new Wage_employee('Sam', 'Fisher', 120);
arr[1].salary_per_month();
arr[2] = new Fix_employee('Katy', "Parry", 21000);
arr[3] = new Wage_employee('Tom', 'Forest', 90);
arr[3].salary_per_month();
arr[4] = new Wage_employee('Matt', 'Mad', 90);
arr[4].salary_per_month();


//start creating new employee with the index of the last + 1
let i =arr.length;

/*
 on submit we read value of our input and if we have data of fix salary
 we create new employee by  one pattern
 and if for wage => for second pattern

*/
document.querySelector('.submit').onclick = function() {

    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;

    if (fix.checked === true) {
        let pay_month = +salary_month.value;
        arr[i] = new Fix_employee(name, surname, pay_month);
    } else if (wage.checked === true) {
        let per_hour = salary_per_hour.value;
        arr[i] = new Wage_employee(name, surname, per_hour);
        arr[i].salary_per_month();
    }
    console.log(arr);
    reset();
    sortArr();
    render(arr);
    i++;
};

//function of rending our array items  and creating logical nodes

function render(arr) {

   for(i in arr) {

        const workers = document.querySelector('.workers');
        const worker = document.createElement('div');
        worker.classList.add('worker');
        workers.appendChild(worker);

        const worker_id = document.createElement('div');
        worker_id.classList.add('worker_id');
        worker_id.innerText = arr[i].id;
        worker.appendChild(worker_id);

        const worker_name = document.createElement('div');
        worker_name.classList.add('worker_name');
        worker_name.innerText = arr[i].name;
        worker.appendChild(worker_name);

        const worker_surname = document.createElement('div');
        worker_surname.classList.add('worker_surname');
        worker_surname.innerText = arr[i].surname;
        worker.appendChild(worker_surname);

        const worker_salary = document.createElement('div');
        worker_salary.classList.add('worker_salary');
        worker_salary.innerText = arr[i].salary;
        worker.appendChild(worker_salary);

   }
}

// sort our array by salary, and when it is equal, then by name
function sortArr() {
    arr.sort(function (a, b) {
            if (a.salary < b.salary) {
                return 1;
            } else if (a.salary > b.salary) {
                return -1;
            } else {
                if (a.name > b.name) {
                    return 1;
                }else if(a.name < b.name) {
                    return -1;
                }
            }
    });
}

/*
 every time, when we creat new employee we must clear existing node
 for write new sort data
 */

function reset() {
    let fields = document.querySelectorAll('.worker');

       for(let i = 0; i < fields.length ; i++) {
           fields[i].remove();
       }
}

//event of our buttons to show first 5 employees and last 3
document.querySelector('.button_first').onclick = function () {
    reset();
    let first5_arr = arr.slice(0,5);
    render(first5_arr);
};

document.querySelector('.button_last').onclick = function () {
    reset();
    console.log(typeof arr);
    let flast3_arr = arr.slice(arr.length-3,arr.length);
    render(flast3_arr);
};

document.querySelector('.button_all').onclick = function () {
    reset();
    render(arr);
};
