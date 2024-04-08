let submitButton;

function getPartsOfHTML() {
  submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", addTaskFromInputBox)
}
function makeATask(taskWords, day, taskComplete) {
  console.log(taskWords);
  const newTaskList = document.createElement("li");
  newTaskList.textContent = taskWords;
  console.log(newTaskList)
  
  taskList = document.querySelector(`#${day}`);
 
  
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type","checkbox");
  checkBox.addEventListener('change', checkBoxSystem.bind(null, newTaskList, checkBox));
  console.log(checkBox)
   taskList.appendChild(newTaskList)
  
  if(taskComplete === "complete") {
    newTaskList.classList.add("cross-out");
    checkBox.checked = true;
  }
  newTaskList.appendChild(checkBox);
}
function addTaskFromInputBox() {

  let inputBox = document.querySelector("#theTask");
  let taskInput = inputBox.value;
  let selector = document.querySelector("#daySelect")
  let value = selector.value
  console.log(value)
  makeATask(taskInput, value);
}
function makeList(day, heading) {
  console.log("monday list");
  const newTaskList = document.createElement("ol");
  const newH2 = document.createElement("h3");
  const newDiv = document.createElement("div");
  const newH3 = document.createElement("h2");
  // newTaskList.textContent = day;
  newH3.textContent = heading;
  newH2.textContent = day;
  newTaskList.appendChild(newH2);
  newTaskList.setAttribute('id', day);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newTaskList);
  
  
  
  
  // let allLists = document.querySelector(".allTheLists");
  let allDivs = document.querySelector(".allDivs")
  // allLists.appendChild(newTaskList);
  // newTaskList.appendChild(newH2)
  // allLists.appendChild(newH3);
  allDivs.appendChild(newDiv)
  

}
function makeHeading(heading) {
  
  
}

function checkBoxSystem(newTaskList, checkBox) {
  if(checkBox.checked) {
    newTaskList.classList.add("cross-out");
  }
  else {
    newTaskList.classList.remove("cross-out");
  }
}
function run() {
  getPartsOfHTML();
  
  let dayOptions = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] //these are the H2's
  let headingOptions = ["M","T","W","Th","F","Sa","Su",] //these are the H3's
  for (let i = 0; i < dayOptions.length; i++){
      let day = dayOptions[i]
      
      // for (let h = 0; h < headingOptions.length; h++){
      let heading = headingOptions[i]
      makeList(day, heading)
      // }
    }   
}

document.addEventListener('DOMContentLoaded', run);
