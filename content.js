doJob();
function doJob() {
  click();
  acceptAndStart();
  doTaskAgain();
  Reload();
}
function JobsMenu() {
  var n = document.getElementsByClassName("btn-danger btn")[0]?.innerText;
  if (n != " Skip this task") {
    const Job = document.createElement("li");
    Job.innerHTML = `
  <a href="https://www.microworkers.com/jobs.php?Filter=no&Sort=NEWEST&Id_category=09">Data Collection</a>
  `;
    document.querySelector("nav ul")?.appendChild(Job);
    Job.querySelector("a")?.click();
  }
}

function click() {
  let jobsNumber = document.querySelectorAll(".jobslisthighlight").length;
  if (jobsNumber >= 3)
    document.querySelectorAll(".jobslisthighlight")[jobsNumber - 2]?.querySelector("a")?.click();
  else
    document.querySelectorAll(".jobslisthighlight")[jobsNumber - 1]?.querySelector("a")?.click();
}

function acceptAndStart() {
  document.querySelector('[name="CampaignId"]+button')?.click();
}

function tryagain() {
  let max = 15000;
  let min = 11000;
  let time = Math.floor(Math.random() * (max - min + 1) + min);
  setTimeout(() => {
    window.location.reload(true);
  }, time);
}

function doTaskAgain() {
  document.querySelector(".glyphicon.glyphicon-repeat")?.click();
}
function Reload() {
  var a = document.getElementsByClassName("center")[0]?.innerText;
  if (a == "TTVCampaign-E0028:All positions taken already\nHome") {
    setTimeout(() => {
      JobsMenu();
    }, 5000);
  } else {
    let max = 15000;
    let min = 11000;
    let time = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(() => {
      JobsMenu();
    }, time);
  }
}
function sendNotificationMessage(message) {
  chrome.runtime.sendMessage({ message: message });
}

try {
  var n = document.getElementsByClassName("btn-danger btn")[0]?.innerText;
  if (n == " Skip this task") {
    sendNotificationMessage("A job is accepted !!!");
  }
} catch (error) {
  sendNotificationMessage("Error: " + error);
}
