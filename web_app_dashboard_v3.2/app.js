/*-----------------------------
Global Scope Variables:
------------------------------*/
let bell = document.getElementById('bell');
let grDot = document.getElementById('dot-notification');
let notificationUl = document.getElementById('noti-ul');
let arrow = document.getElementById('notification-arrow');
let btnClear = document.getElementById('btn-clear');
let msgField = document.getElementById('msg-txt');
let placeholder = document.querySelector('textarea[placeholder]');
let sendBtn = document.getElementById('send');
let sentNotification = document.getElementById('sent-msg');
let notifP= document.getElementById('msg-conf');
let disappearX = document.getElementById('disappearX');
let form= document.querySelector('form');
let saveBtn = document.getElementById('save');
let cancelBtn = document.getElementById('cancel');
let switchSlider = document.getElementsByClassName('switch');
const searchWrapper = document.querySelector('.search-div');
const inputBox = searchWrapper.querySelector('input');
const resultBox= searchWrapper.querySelector('.result-box');
const traffic = document.getElementById('traffic-graph');
const hourlyLi = document.getElementById('hour');
const dailyLi = document.getElementById('day');
const weeklyLi = document.getElementById('week');
const monthlyLi = document.getElementById('month');



/*----------------------------------
An Array of names for the search bar:
-----------------------------------*/

const contacts = [
    'Dan Oliver',
    'dan.oliver82@example.com',
    'Daun Wood',
    'daun.wood16@example.com',
    'Dale Byrd',
    'dale.byrd52@example.com',
    'Victoria Chambers',
    'victoria.chambers80@example.com'
]


/*-----------------------------
Alert Notification:
Should appear at first, but disapear when x is pressed.
------------------------------*/

function alertBtn(){
    let alert= document.getElementById('alert');
    let xBtn = document.getElementById('x-btn');
    xBtn.addEventListener('click', (e)=> {

        if (xBtn){
            alert.style.display= 'none';
        }
    });
};
alertBtn();

/*-----------------------------
Alert Notifications:
Display at least two notifications at the same time when the user clicks the alerts icon
This could be a pop-up window or dropdown menu.
------------------------------*/

bell.addEventListener('click', (e)=> {
    if (bell) {
        notificationUl.style.display= 'block';
        arrow.style.display= 'block';
    } 
})
btnClear.addEventListener('click', (e)=> {
    if(btnClear){
        notificationUl.style.display= 'none';
        arrow.style.display= 'none';
        grDot.style.display= 'none';
    }
})

/*-----------------------------
Chart widgets
Using chart.js, create and include the information for the following chart widgets, as shown in the mockup for the:
Web Traffic (line chart), Daily Traffic Bar Chart (bar chart), Mobile User Pie Chart (donut chart)
**Style the charts to match the overall style of the dashboard.**
You will need to make up this data -- you can see the mockup for sample data.

Traffic chart widget
Create a navigation similar to the one in the mockup to display different data when the Hourly,
 Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly 
 and Monthly buttons so that a different line chart is displayed on click.
------------------------------*/

//----------------------------------------
//Traffic Chart Data x4 for Exceeds Expectations
//----------------------------------------
const hour = [
    {x: Date.parse('2023-04-17 01:00:00 GMT -8:00'), y: 1200},
    {x: Date.parse('2023-04-17 03:00:00 GMT -8:00'), y: 250},
    {x: Date.parse('2023-04-17 05:00:00 GMT -8:00'), y: 500},
    {x: Date.parse('2023-04-17 07:00:00 GMT -8:00'), y: 250},
    {x: Date.parse('2023-04-17 09:00:00 GMT -8:00'), y: 650},
    {x: Date.parse('2023-04-17 11:00:00 GMT -8:00'), y: 750},
    {x: Date.parse('2023-04-17 13:00:00 GMT -8:00'), y: 1300},
    {x: Date.parse('2023-04-17 15:00:00 GMT -8:00'), y: 1500},
    {x: Date.parse('2023-04-17 17:00:00 GMT -8:00'), y: 1250},
    {x: Date.parse('2023-04-17 19:00:00 GMT -8:00'), y: 2000},
    {x: Date.parse('2023-04-17 21:00:00 GMT -8:00'), y: 700},
    {x: Date.parse('2023-04-17 24:00:00 GMT -8:00'), y: 300},
];
const day = [
    {x: Date.parse('2023-04-17 00:00:00 GMT -8:00'), y: 1200},
    {x: Date.parse('2023-04-18 00:00:00 GMT -8:00'), y: 3250},
    {x:Date.parse('2023-04-19 00:00:00 GMT -8:00'), y: 2000},
    {x:Date.parse('2023-04-20 00:00:00 GMT -8:00'), y: 4500},
    {x:Date.parse('2023-04-21 00:00:00 GMT -8:00'), y: 5500},
    {x:Date.parse('2023-04-22 00:00:00 GMT -8:00'), y: 3750},
    {x:Date.parse('2023-04-23 00:00:00 GMT -8:00'), y: 2300},
];

const week = [
    {x: Date.parse('2023-04-2 00:00:00 GMT -8:00'), y: 11250},
    {x: Date.parse('2023-04-9 00:00:00 GMT -8:00'), y: 21000},
    {x: Date.parse('2023-04-16 00:00:00 GMT -8:00'), y: 10000},
    {x: Date.parse('2023-04-23 00:00:00 GMT -8:00'), y: 15000},
    {x: Date.parse('2023-04-30 00:00:00 GMT -8:00'), y: 15000},
];

const month = [
    {x: Date.parse('2023-01-01 00:00:00 GMT -8:00'), y: 75000},
    {x: Date.parse('2023-02-01 00:00:00 GMT -8:00'), y: 125000},
    {x: Date.parse('2023-03-01 00:00:00 GMT -8:00'), y: 100000},
    {x: Date.parse('2023-04-01 00:00:00 GMT -8:00'), y: 200000},
    {x: Date.parse('2023-05-01 00:00:00 GMT -8:00'), y: 150000},
    {x: Date.parse('2023-06-01 00:00:00 GMT -8:00'), y: 175000},
    {x: Date.parse('2023-07-01 00:00:00 GMT -8:00'), y: 100300},
    {x: Date.parse('2023-08-01 00:00:00 GMT -8:00'), y: 100800},
    {x: Date.parse('2023-09-01 00:00:00 GMT -8:00'), y: 220000},
    {x: Date.parse('2023-10-01 00:00:00 GMT -8:00'), y: 100500},
    {x: Date.parse('2023-11-01 00:00:00 GMT -8:00'), y: 205000},
    {x: Date.parse('2023-12-01 00:00:00 GMT -8:00'), y: 250000},

];

//----------------------------------------
//Traffic Chart
//----------------------------------------

const myChart = new Chart(traffic, {
    type: 'line',
    data: {
      datasets: [{
        data: hour,
        borderWidth: 1,
        backgroundColor: ['rgba(151, 145, 206, 0.492)'],
        fill: {
            target: 'origin', 
            below: 'rgba(151, 145, 206, 0.311)' 
          },
          animation: {
            duration: 0
            }
      }]
    },
    options: {
    animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: .35,
            loop: false
        }
    },
      scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day'
            }
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
        display: false
        }
        },
        layout: {
            padding: 20

    },
   
}
  });

//--------------------
//Changing charts code:
//--------------------

function timeFrame(period) {
  console.log(period.value);
  if(period.value == 'hour') {
    myChart.data.datasets[0].data = hour;
    myChart.options.scales.x.time.unit= 'day'; 
  } 
  if(period.value == 'day') {
    myChart.data.datasets[0].data = day;
    myChart.options.scales.x.time.unit= period.value; 
  }
  if(period.value == 'week') {
    myChart.data.datasets[0].data = week;
    myChart.options.scales.x.time.unit= period.value; 
  }
  if(period.value == 'month') {
    myChart.data.datasets[0].data = month;
    myChart.options.scales.x.time.unit= period.value; 
  }
  myChart.update();
};


//------------------------
//Daily Traffic Bar Chart
//------------------------

  const ctx = document.getElementById('bar-chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
      datasets: [{
        data: [75, 125, 175, 135, 225, 200, 100],
        borderWidth: 1,
        backgroundColor: ['rgb(151, 145, 206)'],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
        display: false
        }
        },
        layout: {
            padding: 20

    },
    
    }
  });


//------------------------
//Mobile Doughnut Chart
//------------------------

const doughnut = document.getElementById('doughnut-chart');

new Chart(doughnut, {
    type: 'doughnut',
    data: {
      labels: ['Desktop', 'Tablet', 'Phones'],
      datasets: [{
        data: [60, 15, 15],
        borderWidth: 1,
        backgroundColor: ['rgb(151, 145, 206)', 'rgb(115, 206, 115)', 'rgb(6, 209, 223)'],
      }]
    },
    options: {
    plugins: {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        },
        layout: {
            padding: 20

    },
    
    }
  });


/*-----------------------------
Use JS to allow you to submit the message form when the 
send button is pressed and **display a 
confirmation the message was sent. You won't actually submit the form, just 
simulate the action using JavaScript.
**Use JS to display error messages if a user isn’t selected or message field is empty.**
------------------------------*/

sendBtn.addEventListener('click', (e) => {
    if(inputBox.value === "" && msgField.value === "" ) {
        alert('No user selected, and no message to send.');
    } else if (inputBox.value === ""){
        alert('Please select a user before sending');
    } else if (msgField.value === "") {
        alert('No message to send. Please type a message');
    } else {
        alert(`Message sent successfully to: ${inputBox.value} `);
    }
})

/*-----------------------------
The JS Search
------------------------------*/

//Create a function to listen for key events and compare results

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = contacts.filter((contact)=> {
            return contact.toLowerCase().startsWith(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultBox.innerHTML = '';
    }
}
//Create another function that displays 'li' items from the array if the result of the search matches

function display(result) {
    const content=result.map((list)=> {
        return `<li onclick=selectInput(this)>${list}</li>`;
    });
    resultBox.innerHTML = `<ul>${content.join('')}</ul>`;
    return resultBox;
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}

/*-----------------------------
Use local storage to save the settings:
-The settings are saved to local storage when the "Save" button is clicked.
-The settings are reset when the "Cancel" button is clicked.
-When page is reloaded the settings are remembered.
------------------------------*/