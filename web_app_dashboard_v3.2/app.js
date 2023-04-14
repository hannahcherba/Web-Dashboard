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


//Daily Traffic Bar Chart

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
      datasets: [{
        label: '# of Cars in Thousands',
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
      }
    }
  });


/*-----------------------------
Use JS to allow you to submit the message form when the 
send button is pressed and **display a 
confirmation the message was sent. You won't actually submit the form, just 
simulate the action using JavaScript.
**Use JS to display error messages if a user isn’t selected or message field is empty.**
------------------------------*/


//problem with notification only appearing after clicking button again

sendBtn.addEventListener('click', (e) => {
    if(sendBtn) {
        for(let i= 0; i< contacts.length; i++){
            if(inputBox.textContent != contacts[i] || inputBox.textContent === none) {
                notifP.textContent="No user selected";
                sentNotification.style.display="flex";
            } else {
                form.submit();
                notifP.textContent= 'Message sent successfully';
                sentNotification.style.display="flex";
            }
        }
    }
});

disappearX.addEventListener('click', (e)=> {
    if(disappearX){
        sentNotification.style.display="none";
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