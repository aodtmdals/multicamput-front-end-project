

const questionBtn = document.getElementById("question-button");
const inputMsg = document.getElementById("send-message");
const sendMsg = document.getElementsByClassName("message-area");
const chatTitle = document.querySelectorAll("#chat-title");
const confirmCheck = document.getElementById("not-confirm-message");
const chatList = document.querySelectorAll(".chat-list"); 
const moreArea = document.getElementById("more-area");  
const moreBtn = document.getElementById("more-btn"); 
const dropdown = document.getElementById("more-dropdown");
const dropdownItem = document.querySelectorAll(".dropdown-item");

let clickCount =  0;
let headerClickCount = 0; 

function buttonChange(){
    if(inputMsg.value){
        questionBtn.disabled = false;
    } else{
        questionBtn.disabled = true;
    }
}

function question(){
    const newSendBox = document.createElement('div');
    const newSpan =document.createElement('span');
    const newImg =document.createElement('img');
    const newSendMsg = document.createElement('div');
    const sendmessage = document.createElement('span');
    const msgTime = document.createElement('div');

    const time = new Date();
    let amPm = '오후';
    let hours = time.getHours();
    const minutes = time.getMinutes();
   
    if(hours >= 12) { // 시간이 12보다 클 떄, PM으로 변경 후, 12시간을 빼준다.
        amPm.innerText = '오전';
        hours = hours - 12;
    }

    hours = hours.toString().padStart(2, '0');

    newSendBox.className = "recive-msg-box";
    newSpan.className = "profile-img";
    newSendMsg.className = "recive-msg";
    newImg.src = "#";
    sendmessage.innerHTML = inputMsg.value;
    msgTime.innerHTML = `${amPm} ${hours}시 ${minutes}분`;

    console.log(msgTime.innerHTML);

    sendmessage.appendChild(newSendBox);
    newSendBox.appendChild(newSpan);
    newSpan.appendChild(newImg);
    newSendBox.appendChild(newSendMsg);
    newSendMsg.appendChild(sendmessage);
    newSendBox.appendChild(msgTime);
}

function notRead(){
    for(let items = 0; items < chatTitle.length; items++){
        let item = chatTitle[items];
        for(let elements = 0; elements < item.childNodes.length; elements++){
            let element = item.childNodes[elements];
            readClass = element.className;

            if(readClass == 'not-read'){
                console.log("true");
                item.className += 'not-read-list';
            }
        }
    }
}

function ischecked(){
    if(confirmCheck.checked == true){
        for(let items = 0; items < chatTitle.length; items++){
            let item = chatTitle[items];
            console.log(item);
            if(item.className != 'not-read-list'){
                chatList[items].classList.add("hidden");
            }
        }
    }
    else{
        for(let items = 0; items < chatTitle.length; items++){
            for(let elements = 0; elements < chatList[items].classList.length; elements++){
                if(chatList[items].classList[elements] == "hidden"){
                    chatList[items].classList.remove("hidden");
                }
            }
        }
    }
}

function showDropdown(){
    dropdown.classList.remove("hidden");
}
function hiddenDropdown(){
    dropdown.classList.add("hidden");
}

moreBtn.addEventListener('click', function(){
    clickCount++;
    if(clickCount%2 == 0){
        hiddenDropdown();
    }else{
        showDropdown();
    }
});

for(let item = 0; item < dropdownItem.length; item++){
    dropdownItem[item].addEventListener('click', function(event){
        clickCount = 0;
        event.preventDefault();
        hiddenDropdown();
    });
}

notRead();