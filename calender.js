let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
console.log(currentYear)
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let eventadder = document.getElementById("exampleModalLabel");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth,currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 1) ? 12 : currentMonth - 1;
    showCalendar(currentMonth,currentYear);
}

function previousyear(){
    currentYear = currentYear-1;
    showCalendar(currentMonth,currentYear)
}

function nextyear(){
    currentYear = currentYear+1;
    showCalendar(currentMonth,currentYear)
}


function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let date = 1;

    let tbl = document.getElementById("calendar-body"); 

    tbl.innerHTML = "";
    eventadder.innerHTML ="Add Event on: " + months[month] + " " + year;

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;


    
    
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");

                cell.appendChild(cellText);
                row.appendChild(cell);
                
                
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let button = document.createElement("button");
                button.setAttribute("class","btn btn-primary");
                button.setAttribute("data-toggle","modal");
                button.setAttribute("data-target","#exampleModal");
                button.addEventListener('click',function(){
                    let val = button.value;
                    console.log(val);
                });
                
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                   
                }
                cell.appendChild(button).appendChild(cellText);
                row.appendChild(cell);
                
                date++;
                
            }
        }

        tbl.appendChild(row);
    }

}


 


