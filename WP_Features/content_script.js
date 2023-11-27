
const blur = function (){
let chatList = document.getElementById("pane-side");
if(chatList){
chatList.style.filter = "blur(4px)";
}
};

const checkElement = () => {
    let chatList = document.getElementById("pane-side"); 
    if(chatList){
        blur();
    }else{
        setTimeout(checkElement,1000);
    }
}
checkElement();
