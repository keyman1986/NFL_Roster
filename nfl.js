
var position = document.getElementById("positions"); 
var options = ["Front", "Center", "Middle", "Ball Holder", "Water Boy"]; 

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var elem = document.createElement("option");
    elem.textContent = opt;
    elem.value = opt;
    position.appendChild(elem);
};

$("#addPlayerButton").on('click',function(e){
	e.preventDefault();
	$(".roster").append('<div class="center player-card"><button class="btn btn-danger remove-button">Remove</button></span></br><span><img src="player.png" alt="Person 1"></span></br><span>Name</span></br><span>Position</span></br><span>Number</div></br>');
});



$('.roster').on('click', '.remove-button', function(e){
	e.preventDefault();
	$(this).parent().remove()
	
});