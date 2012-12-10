	//
	// move6.js
	//
			
			var North = 0;
      var South = 1;
      var East  = 2;
      var West  = 3;
      var score = 0;
      var currentlocation = 0;
     
          
      function move(direction){
        NewLoc= Nav[currentlocation][direction];
        if(NewLoc >= 0){
          currentlocation = NewLoc;
          updateText(Locations[currentlocation].description);
          disableButtons();
         } else {
            updateText("You can't go that way.");
         }
       }
       
       
          
      
        function updateText(msg) {
          msg = msg + "[" + currentlocation + "]";
          var ta = document. getElementById ("taGame");
            ta.value = msg + "\n" + ta.value;
            }

             
                function btn_Go_click(){
                  var txt = document.getElementById("txtCommand");
                  var num= parseInt(txt.value);
                    for (var i=0; i < num; i=i+1) {
                      alert("loop: "+ i);
                       btn_thing_click(i);
                      }
                      }

        function Btn_Score_Click(){
        alert(score);
        }
      
       function btn_go_click() {
        var userinput = document.getElementById("txtInput");
          switch(userinput.value) {
          case "n":
          case "N":
          case "north":
          case "North":
          move_north();
          break;
          case "s":
          case "S":
          case "south":
          case "South":
          move_south();
          break;
          case "e":
          case "E":
          case "east":
          case "East":
          move_east();
          break;
          case "w":
          case "W":
          case "west":
          case "West":
          move_west();
          break;
          case "take":
          case "Take":
          takeCrowbar();
          takeChainsaw();
          takeScissors();
          takeGlasses();
          break;
          case "inventory":
          Btn_inventory_click();
          break;
          case "help":
          case "Help":
          Btn_help_click();
          break;
          case "win":
          case "Win":
          win();
          break;
          }
          }
        

        function init() {
        updateText("You are standing in a vacant parking lot and you seem to have misplaced your glasses. To the north you see a vague outline of a building. To the south you see a flickering street light.");
           Locations [0] = new Location(0,"Start", "You are standing in a vacant parking lot and you seem to have misplaced your glasses. To the north you see a vague outline of a building. To the south you see a flickering street light.",  "none.");
           Locations [1] = new Location(1,"North1", "You walk North and see a box shaped building a little ahead of you, there are some rusty scissors on the ground.",  "Scissors.");
           Locations [2] = new Location(2,"South1", "You walked south, the street light begins to get brighter as you get closer and now you can see that there is a lonesome man leaning againts the lamp post.","none.");
           Locations [3] = new Location(3,"East1", "You begin to walk east and you see a lone car in this large abandoned parking lot.","none.");
           Locations [4] = new Location(4,"West1", "You walk west and find a rusty Shopping cart that has a crowbar.","Crowbar");
           Locations [5] = new Location(5,"North2", "As you continue north you approach the building and you can see that the front door is a few more yards in front of you.","none.");
           Locations [6] = new Location(6,"South2", "As you approach the man he whistles and 3 other guys with knives stab you to death.","none");
           Locations [7] = new Location(7,"East2", "Approaching the car you see that there is a chainsaw in the backseat.","Chainsaw");
           Locations [8] = new Location(8,"West2", "Continuing on past the shopping cart you find that there is a zombie horde of kittens that eat your eyes.","none.");
           Locations [9] = new Location(9,"North3", "You approach the door only to find that it is locked, but there are a pair of glasses on the ground. Maybe you could open pry open the door","Glasses.");
    
        Item();
        }
