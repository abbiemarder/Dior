//Life of Dior accordion:
document.getElementById("earlyLifeTab").className =
  "accordionPanelTab highlight"; //Hides the first panel (Early life) in the Life of Dior accordion
document.getElementById("midLifeContent").style.display = "none"; //Hides the second panel (Mid life) in the Life of Dior accordion
document.getElementById("lateLifeContent").style.display = "none"; //Hides the third panel (Late life) in the Life of Dior accordion

function showEarlyLife() {
  hidePanels();
  document.getElementById("earlyLifeContent").style.display = "block";
  document.getElementById("earlyLifeTab").className =
    "accordionPanelTab highlight";
}
//when Early life panel is clicked (onclick element) the title will be highlighted and the content will be released

function showMidLife() {
  hidePanels();
  document.getElementById("midLifeContent").style.display = "block";
  document.getElementById("midLifeTab").className =
    "accordionPanelTab highlight";
}
//when Mid life panel is clicked the title will be highlighted and the content will be released
function showLateLife() {
  hidePanels();
  document.getElementById("lateLifeContent").style.display = "block";
  document.getElementById("lateLifeTab").className =
    "accordionPanelTab highlight";
}

function hidePanels() {
  //Hides the panels for Life of Dior accordion and removes the style from each one.
  document.getElementById("earlyLifeContent").style.display = "none";
  document.getElementById("midLifeContent").style.display = "none";
  document.getElementById("lateLifeContent").style.display = "none";
  document.getElementById("earlyLifeTab").className = "accordionPanelTab";
  document.getElementById("midLifeTab").className = "accordionPanelTab";
  document.getElementById("lateLifeTab").className = "accordionPanelTab";
}
