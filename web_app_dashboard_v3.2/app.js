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
//Traffic Chart x4 for Exceeds Expectations
//----------------------------------------

function hourly() {

new Chart(traffic, {
    type: 'line',
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1300, 1800, 2200, 1500, 2500],
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

};


  function daily() {

    new Chart(traffic, {
        type: 'line',
        data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
            data: [1200, 2250, 7000, 9000, 3500, 5750, 7300, 9800, 4200, 7500, 3500],
            borderWidth: 1,
            backgroundColor: ['rgba(151, 145, 206, 0.492)'],
            fill: {
                target: 'origin', 
                below: 'rgba(151, 145, 206, 0.311)' 
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
  };

  function weekly() {
    new Chart(traffic, {
        type: 'line',
        data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
            data: [7700, 12400, 10700, 28000, 15800, 18000, 15000, 17000, 23000, 14000, 25200],
            borderWidth: 1,
            backgroundColor: ['rgba(151, 145, 206, 0.492)'],
            fill: {
                target: 'origin', 
                below: 'rgba(151, 145, 206, 0.311)' 
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
  };
 

  function monthly() {

    new Chart(traffic, {
        type: 'line',
        data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
            data: [74000, 122000, 105000, 210000, 155000, 186000, 135000, 173000, 230000, 100000, 210000],
            borderWidth: 1,
            backgroundColor: ['rgba(151, 145, 206, 0.492)'],
            fill: {
                target: 'origin', 
                below: 'rgba(151, 145, 206, 0.311)' 
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
  };
  
//--------------------
//Changing charts code:
//--------------------

hourly();

hourlyLi.addEventListener('click', (e)=> {
    if (hourlyLi){
        hourly();
    }
})

dailyLi.addEventListener('click', (e)=> {
    if (dailyLi){
        daily();
    }
})

weeklyLi.addEventListener('click', (e)=> {
    if (weeklyLi){
        weekly();
    }
})

monthlyLi.addEventListener('click', (e)=> {
    if (monthlyLi){
        monthly();
    }
})

//Daily Traffic Bar Chart

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

//Mobile Doughnut Chart

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