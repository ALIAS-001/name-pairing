var names = [];
var coor1 = [];
var out = [];
function submit(event){
	if(event.keyCode == 13 || event.srcElement.id == 'submit'){
		var x = names.length;
		var input = document.getElementById('input').value;
		if(input != undefined && input != ""){
			document.getElementById('input').value = "";
			names.push(input);
			console.clear();
			console.log(names);
			document.getElementById('input').focus();
		}
	}
}
function finish(){
	coor1 = [];
	out = [];
	var z = names.length;
	if(z%2 != 0){
		document.getElementById('out').innerHTML = "<table></tr><td>one person will be left out.";
	}else{
		document.getElementById('out').innerHTML = "<table><tr><td>";
	}
	// compiler
	var all = (z-(z%2))/2;
	for(var i=0;i<all;i++){
		var x = Math.floor(Math.random() * z);
		var y = Math.floor(Math.random() * z);
		while(y == x){
			y = Math.floor(Math.random() * z);
		}
		var cou = coor1.length;
		for(var n=0;n<cou;n++){
			while(x == coor1[n]){
				x = Math.floor(Math.random() * z);
				n=0;
			}
		}
		for(var n=0;n<cou;n++){
			while(y == coor1[n]){
				y = Math.floor(Math.random() * z);
				n=0;
			}
		}
		for(n=0;n<cou;n++){
			if(coor1[n] == coor1[n+1]){
				var z = Math.floor(Math.random()*cou);
				while(z == n){
					z = Math.floor(Math.random()*cou);
				}
				var hold = coor1[n];
				coor1[n] = coor1[z];
				coor1[z] = hold;
			}
		}
		coor1.push(x);
		coor1.push(y);
		var out1 = names[x];
		var out2 = names[y];
		var log = document.getElementById('out').innerHTML;
		log += out1 +", "+ out2;
		log += "<br>";
		document.getElementById('out').innerHTML = log;
	}
	log = document.getElementById('out').innerHTML;
	log += "</td></tr></table>";
	document.getElementById('out').innerHTML = log;
    names = [];
}
