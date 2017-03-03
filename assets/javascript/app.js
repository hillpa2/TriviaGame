$(document).ready(function() {
		//initializer
		var wins=0;
		var losses=0;
		var questionNum=0;
		var questions=["What is the capital of Belize?", "What is the capital of St Kitts and Nevis?",
		"What is the capital of St Lucia", "What is the capital of Suriname?", 
		"What is the capital of Dominica", "What is the capital of Grenada?"];
	
		var questionAns=["Belmopan", "Basseterre", "Castries City", "Paramaribo", "Roseau", "St George's"];
		
		var button0=["Belize City", "Kittiya", "St Andrew's City", "Paramaribo", "Roseau", "New Boston"];
		var button1=["Linky's Town", "Basseterre", "Castries City", "Suriname City", "Sector One", "Nutmeg"];
		var button2=["Beck's City", "Nevisia", "Jonathan Town", "Yohanisburg", "New Paris", "St George's"];
		var button3=["Belmopan", "Alexiton", "St Michael's Town", "Minsk", "Dominica City", "Reagansville"];

		var status="NULL";
		var intervalId;
		var timer=999999;
		//end initializer
		
		//timer
		function run() {
      		intervalId = setInterval(decrement, 1000);
    	};

    	function decrement() {
    		
      		timer--;
      		
      		$("#TIMER").html(timer);
      		
      		if (timer === 0) {
        		losses++;
        		
        		$("#HTMLOUT").append("Time is up, the correct answer was " + questionAns[questionNum-1]);
				$(".button").empty();

				//pause
				setTimeout(function(){ 
					//clearer
					$("#HTMLOUT").empty();
					$("#START").empty();
					$("#TIMER").empty();
					//$("#CLEARER").empty();
					//end clearer

					//new question
					$("#START").append(questions[questionNum]);
					$(".zero").append("<button class='b-y'>" + button0[questionNum] + "</button>");
					$(".one").append("<button class='b-y'>" + button1[questionNum] + "</button>");
					$(".two").append("<button class='b-y'>" + button2[questionNum] + "</button>");
					$(".three").append("<button class='b-y'>" + button3[questionNum] + "</button>");
					//end new question

					//question change
					questionNum++;
					//end question change

					//timer reset
					timer=20;
					//end timer reset

				}, 5000);
				//pause

				//if end
				if (questionNum===6) {
					$("#CLEARER").empty();
					$("#HTMLOUT").empty();
					$("#HTMLOUT").append("<div>Game is over here are the results</div><div>Questions Won: " + wins + "</div><div>Questions Lost: " + losses + "</div>");
				};
				//end if end
        	
      		};
    	};
    	run();
    	//end timer





		
		//when button is pushed
		$(".button").on("click", function(event) {
			

			//event to buttonPushed
			buttonPushed = $(this).text();
			//end event to buttonPushed

			 
			//for win or loss
			if (buttonPushed===questionAns[questionNum-1]) {
				wins++;

				$("#HTMLOUT").append("Your answer, " + questionAns[questionNum-1] + ", was correct");
				$(".button").empty();

			}
			else if (buttonPushed==="START") {
				$("#HTMLOUT").append("THE GAME WILL BEGIN MOMENTARILY");
				$(".button").empty();
			}
			else {
				losses++;

				$("#HTMLOUT").append("Incorrect, the correct answer was " + questionAns[questionNum-1]);
				$(".button").empty();

			};
			//end for win or loss

			//stop timer
			clearInterval(intervalId);
			//end stop timer
			
			//pause
			setTimeout(function(){ 
			
				//console.log
				console.log("Question# " + questionNum);
				console.log("button pushed: " + buttonPushed);
				console.log("wins: " + wins);
				console.log("losses: " + losses);
				//end console.log

				//clearer
				$("#HTMLOUT").empty();
				$("#START").empty();
				$("#TIMER").empty();
				//$("#CLEARER").empty();
				//end clearer

				//new question
				$("#START").append(questions[questionNum]);
				$(".zero").append("<button class='b-y'>" + button0[questionNum] + "</button>");
				$(".one").append("<button class='b-y'>" + button1[questionNum] + "</button>");
				$(".two").append("<button class='b-y'>" + button2[questionNum] + "</button>");
				$(".three").append("<button class='b-y'>" + button3[questionNum] + "</button>");
				//end new question

				//question change
				questionNum++;
				//end question change

				//timer reset
				timer=20;
				run();
				//end timer reset

			}, 5000);
			//end pause

			//if end
			if (questionNum===6) {
				$("#CLEARER").empty();
				$("#HTMLOUT").empty();
				$("#HTMLOUT").append("<div>Game is over here are the results</div><div>Questions Won: " + losses + "</div><div>Questions Lost: " + wins + "</div>");
			};
			//end if end


		});
		//end when button is pushed

	});