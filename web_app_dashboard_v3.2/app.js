/*-----------------------------
Alert Notification:
Should appear at first, but disapear when x is pressed.
------------------------------*/
function alertBtn(){
    let alert= document.getElementById('alert');
    let xBtn = document.getElementById('x-btn');
    xBtn.addEventListener('click', (e)=> {
        
    })
}
alertBtn();





/*-----------------------------
The JS Search
------------------------------*/
//Create an array of names

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
//Create an input variable
const searchWrapper = document.querySelector('.search-div');
const inputBox = searchWrapper.querySelector('input');
const resultBox= searchWrapper.querySelector('.result-box');


// //**Create a function to listen for key events and compare results

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
//create another function that displays 'li' items from the array if the result of the search matches

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

