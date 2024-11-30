darkToggled = false;
const dash = document.getElementById("dash");
const sidebar = document.getElementById("sidebar");
const list = document.getElementsByClassName("task-box");
const listoverdue = document.getElementsByClassName("overdue");
const listtoday = document.getElementsByClassName("today");
const listupcoming = document.getElementsByClassName("upcoming");
const announcements = document.getElementById("announcements");
const announceboxes = document.getElementsByClassName("announcement-box");
const toggles = document.getElementsByClassName("toggle");

function toggle(){
    if(!darkToggled){
        document.body.style.backgroundColor = "#1a1a1a";
        dash.style.backgroundColor ="#252e36";
        dash.style.color = "white";
        sidebar.style.backgroundColor="#6e6e6e";
        announcements.style.backgroundColor="#252e36";
        announcements.style.color="white";
        darkToggled = true;
        for (let i = 0; i < list.length; i++) {
            list[i].style.backgroundColor="#3c4954";
          }
          for (let i = 0; i < announceboxes.length; i++) {
            announceboxes[i].style.backgroundColor="#3c4954";
          }
          for (let i = 0; i < toggles.length; i++) {
            toggles[i].style.color="white";
          }
        


    }
    else{
        document.body.style.backgroundColor = "#f5f5f5"; 
        dash.style.backgroundColor ="white";
        dash.style.color = "black";
        announcements.style.backgroundColor="white";
        announcements.style.color="black";
        darkToggled=false;
        sidebar.style.backgroundColor="lightgray";
        for (let i = 0; i < listoverdue.length; i++) {
            listoverdue[i].style.backgroundColor="#ffe6e6";
          }
          for (let i = 0; i < listtoday.length; i++) {
            listtoday[i].style.backgroundColor="#ffffcc";
          }
          for (let i = 0; i < listupcoming.length; i++) {
            listupcoming[i].style.backgroundColor="#e6f7ff";
          }
          for (let i = 0; i < announceboxes.length; i++) {
            announceboxes[i].style.backgroundColor="#f9f9f9";
          }
          for (let i = 0; i < toggles.length; i++) {
            toggles[i].style.color="black";
          }
    }
}