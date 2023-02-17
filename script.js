document.getElementById("earlyLifeTab").className =
  "accordionPanelTab highlight";
  document.getElementById("earlyLifeContent").style.display = "none";
document.getElementById("midLifeContent").style.display = "none";
document.getElementById("lateLifeContent").style.display = "none";

function hidePanels() {
  document.getElementById("earlyLifeContent").style.display = "none";
    document.getElementById("midLifeContent").style.display="none";
  document.getElementById("lateLifeContent").style.display = "none";
  document.getElementById("earlyLifeTab").className = "accordionPanelTab";
  document.getElementById("midLifeTab").className = "accordionPanelTab";
  document.getElementById("lateLifeTab").className = "accordionPanelTab";
}
function showEarlyLife() {
  hidePanels();
  document.getElementById("earlyLifeContent").style.display = "block";
  document.getElementById("earlyLifeTab").className =
    "accordionPanelTab highlight";
}
function showMidLife() {
  hidePanels();
  document.getElementById("midLifeContent").style.display = "block";
  document.getElementById("midLifeTab").className =
    "accordionPanelTab highlight";
}
function showLateLife() {
  hidePanels();
  document.getElementById("lateLifeContent").style.display = "block";
  document.getElementById("lateLifeTab").className =
    "accordionPanelTab highlight";
}
