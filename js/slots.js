function slots(){
	var icons = ['ZERO',232,228 ,234];

	var num1 = Math.ceil((Math.random() * 3));
	console.log(String.fromCharCode(icons[num1]));
	var num2 = Math.ceil((Math.random() * 3));
	console.log(String.fromCharCode(icons[num2]));
	var num3 = Math.ceil((Math.random() * 3));
	console.log(String.fromCharCode(icons[num3]));

	if(num1 == num2 && num2 == num3)
	{
		console.log("Three of a kind! Winner winner chicken dinner :)");
		alert("You've FINALLY won!\n(Now your dating life is another issue...)")
	}
	else if(num1 == 1 && num2 == 2 && num3 == 3)
	{
		console.log("ONE-TWO-THREE\nGreat job! You sorta won, sorta.");
	}
	else if(num1 == 3 && num2 == 2 && num3 == 1)
	{
		console.log("THREE-TWO-ONE\nGreat job! You sorta won, BACKWARDS.");
	}
	else
		console.log("I PITY THE FOOL.  YOU LOSE, SUCKA.");
}

// console.log(String.fromCharCode(167));

slots();
// confirm("Alrighty! Keep playing? (yes/no)");
// var answerLower = answer.toLowerCase();
// console.log(answer);
//answer.toLowerCase();
// while(answer != 'no' || answer === '')
while(confirm("Alrighty! Keep playing?"))
{
	slots();
	// answer = prompt("Alrighty! Keep playing? (yes/no)");

}
