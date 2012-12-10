//
// p6 location.js
//

function Location(_id, _name, _description, _item) {
   this.id          = _id;
   this.name        = _name;
   this.description = _description;
   this.item        = _item;
   
   this.toString= function() {
    var retVal  = "";
    retVal =  "[Location]"                      + "\n" +
              "id:" + this.id                   + "\n" +
              "name:" + this.name               + "\n" +
              "description:" + this.description + "\n" +
              "item:" + this.item;              + "\n" ;
          return retVal;
        }
        }
        
        var Nav= new Array ( 
                /*   N S E W */ 
        /* Loc 0 */ [ 1,2,3,4],
        /* Loc 1 */ [ 5,0,-1,-1],
        /* Loc 2 */ [ 0,6,-1,-1],
        /* Loc 3 */ [ -1,-1,7,0],
        /* Loc 4 */ [ -1,-1,0,8],
        /* Loc 5 */ [ 9,1,-1,-1],
        /* Loc 6 */ [ 2,-1,-1,-1],
        /* Loc 7 */ [ -1,-1,-1,3],
        /* Loc 8 */ [ -1,-1,4,-1],
        /* Loc 9 */ [ -1,5,-1,-1]
               );
        
        
        
        
       var Locations = new Array();
        
  function disableButtons() {
    if (currentlocation === 0) {
      location0();
        }else if (currentlocation === 1) {
          location1();
        } else if (currentlocation === 2) {
      location2();
        }else if (currentlocation === 3) {
          location3();
       }else if (currentlocation === 4) {
      location4();
        }else if (currentlocation === 5) {
          location5();
        }else if (currentlocation === 6) {
      location6();
        }else if (currentlocation === 7) {
          location7();  
        }else if (currentlocation === 8) {
      location8();
        }else if (currentlocation === 9) {
          location9();   
        }
       }
           
  function location0() {
    updateText(Locations [0] .description);
    btn_north.disabled = false
    btn_south.disabled = false
    btn_east.disabled  = false
    btn_west.disabled  = false
    score = score + 5;
    }
    
  function location1() {
    updateText(Locations [1] .description);
    btn_north.disabled = false
    btn_south.disabled = false
    btn_east.disabled  = true
    btn_west.disabled  = true
   if (!playerHasScissors) {
    updateText ("There are scissors here.");
    (playerHasScissors) = true;
    score = score + 5;
    }
    }
  
  function location2() {
    updateText(Locations [2] .description);
    document.getElementById("btn_north").disabled = false
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }
  
  function location3() {
    updateText(Locations [3] .description);
    document.getElementById("btn_north").disabled = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = false
    score = score + 5;
    }
  
  function location4() {
    updateText(Locations [4] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = false
  if (!playerHasCrowbar) {
    updateText ("There is a Crowbar here.");
    playerHasCrowbar = true;
    score = score + 5;
    }
    }
  
  function location5() {
    updateText(Locations [5] .description);
    document.getElementById("btn_north").disabled  = false
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }
  
  function location6() {
    updateText(Locations [6] .description);
    document.getElementById("btn_north").disabled  = false
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }

  function location7() {
    updateText(Locations [7] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = false
  if (!playerHasChainsaw) {
    updateText ("There is a Chainsaw here.");
    playerHasChainsaw = true;
    score = score + 5;
    }
    }
  
  function location8() {
    updateText(Locations [8] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = true
    document.getElementById("btn_east").disabled  = false
    document.getElementById("btn_west").disabled  = true
    score = score + 5;
    }

  function location9() {
    updateText(Locations [9] .description);
    document.getElementById("btn_north").disabled  = true
    document.getElementById("btn_south").disabled = false
    document.getElementById("btn_east").disabled  = true
    document.getElementById("btn_west").disabled  = true
   if (!playerHasGlasses) {
    updateText ("There are Glasses here.");
    playerHasGlasses = true;
    score = score + 5;
    }

    }
    
    function win() {
      if(playerHasCrowbar === true && currentlocation === 9) {
      var msg = "You opened the locked door with the Crowbar, You have won the game! Reload to restart...";
      updateText(msg);
       } 
    }
            
  function Btn_help_click() {
    updateText("To navigate use directional commands. To retrieve and item use 'take'.When you open the magic door type 'Win' to win!");
    }
    
      
  