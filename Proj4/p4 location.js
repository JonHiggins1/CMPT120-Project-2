	//
	//p4 javascript.js
	//
	
		//<script type="text/javascript">

function location0() {
  updateText( "You are standing in a vacant parking lot and you seem to have missplaced your glasses. To the north you see a vague outline of a building. To the south you see a flickering street light.");
  btn_north.disabled = true
  btn_south.disabled = true
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }
  
  
function location1() {
  updateText("You walk North and see a box shaped building a little ahead of you.");
  btn_north.disabled = false
  btn_south.disabled = false
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }
  
function location2() {
  updateText("You walked south, the street light begins to get brighter as you get closer and now you can see that there is a lonesome man leaning againts the lamp post.");
  btn_north.disabled = false
  btn_south.disabled = false
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }

function location3() {
  updateText("You begin to walk east and you see a lone car in this large abandoned parking lot.");
  btn_north.disabled = true
  btn_south.disabled = true
  btn_east.disabled  = false
  btn_west.disabled  = false
  score = score + 5;
  }
  
function location4() {
  updateText("You walk west and find a rusty Shopping cart that has a crowbar.");
  btn_north.disabled = true
  btn_south.disabled = true
  btn_east.disabled  = false
  btn_west.disabled  = false
  if (!playerHasCrowbar) {
  updateText ("There is a Crowbar here.");
  updateText ("You take the Crowbar.");
  playerHasCrowbar = true;
  score = score + 5;
  }
  }
  
function location5() {
  updateText("As you continue north you approach the building and you can see that the front door is a few more yards in front of you.");
  btn_north.disabled = false
  btn_south.disabled = false
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }
  
 function location6() {
  updateText("As you approach the man he whistles and 3 other guys with knives stab you to death.");
  btn_north.disabled = false
  btn_south.disabled = true
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }

function location7() {
  updateText("Approaching the car you see that there is a chainsaw in the backseat.");
  btn_north.disabled = true
  btn_south.disabled = true
  btn_east.disabled  = true
  btn_west.disabled  = false
  if (!playerHasChainsaw) {
  updateText ("There is a Chainsaw here.");
  playerHasCrowbar = true;
  score = score + 5;
  }
  }
  
function location8() {
  updateText("Continuing on past the shopping cart you find that there is a zombie horde of kittens that eat your eyes.");
  btn_north.disabled = true
  btn_south.disabled = true
  btn_east.disabled  = false
  btn_west.disabled  = true
  score = score + 5;
  }

function location9() {
  updateText("You approach the door only to find that is is locked.");
  btn_north.disabled = true
  btn_south.disabled = false
  btn_east.disabled  = true
  btn_west.disabled  = true
  score = score + 5;
  }
  
  function Btn_help_click() {
    updateText("To navigate use directional commants. To retrieve and item use 'take'.");
    }
       
		//</script>