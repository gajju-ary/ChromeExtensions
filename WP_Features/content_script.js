
const blur = function () {
    let chatList = document.getElementById("pane-side");
    if (chatList) {
        chatList.style.filter = "blur(3px)";
    }
};

const checkElement = () => {
    let chatList = document.getElementById("pane-side");
    if (chatList) {
        blur();
    } else {
        setTimeout(checkElement, 1000);
    }
}

checkElement();
// const allChatToggle = document.getElementById("chat-panel").ischecked;
const chatNames = document.getElementById("chat-names").value;
const profileImage = document.getElementById("profile-image").value;
console.log(allChatToggle, "Hello");
// console.log(chatNames, "Hello");
// console.log(profileImage, "Hello");


