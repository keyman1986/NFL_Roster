






var roster;

function addToRoster(a,b,c){
	this.name = a;
	this.position = b;
	this.number = c;
	return roster;
}


$("#addPlayerButton").on('click',function(e){
	var name = "Test Name";
	var position = "Test Position";
	var number = "Test Number"; 
	
	$(".roster").append("Does this work?");
	e.preventDefault();
});