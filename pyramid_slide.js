	//This function prints the pyramid to the screen with the given "Brick Symbol" and the given height.
	function printPyramid(event){
		var pyramid_final = "";			
		for(var row = 0; row < form[1].value; row++){
		
			for(var sp = 0; sp < (form[1].value - row - 1); sp++){
				pyramid_final += " ";
			}
			
			pyramid_final += form[0].value;
			
			for(var hs = 0; hs <= row; hs++){
				pyramid_final += form[0].value;
			}    
			
			pyramid_final = pyramid_final + "<br>";
		}

		var outputDiv = document.getElementById('pyramid-display');
		document.getElementById("height_num").innerHTML = form[1].value;
		outputDiv.innerHTML = pyramid_final;
	}
		
	var form = document.getElementById("pyramid");
	form.addEventListener("change", printPyramid());
				