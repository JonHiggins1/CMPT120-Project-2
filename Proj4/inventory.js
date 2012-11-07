//inventory.js

var playerHasChainsaw = false;
var PlayerHasCrowbar  = false;
  
  function displayInventory() {
    var msg = "Inventory: ";
    if (playerHasChainsaw) {
    msg = msg + "Chainsaw ";
    updateDisplay(msg);
    }
    if (playerHasCrowbar) {
    msg = msg + "Crowbar ";
    }
    updateDisplay(msg);
    }
    
    function takeItem() {
        if (currentlocation === 4) {
          playerHasCrowbar = true;
          updateText("Crowbar taken.");
          } else {
        if (currentlocation === 7) {
          playerHasCrowbar = true;
          updateText("Chainsaw taken."); 
           } else {
          updateText("There is Nothing to take.");
          }
          }
          }
          
    function Btn_inventory_click() {
            var msg = "Inventory: ";
           if (playerHasCrowbar) {
            msg = msg + "Crowbar";
            updateText(msg);
            } else {
           if (playerHasChainsaw) {
            msg = msg + "Chainsaw";
            updateText(msg);
            } else {
              updateText("You have nothing in your inventory");
              }
              }
              }
          
          