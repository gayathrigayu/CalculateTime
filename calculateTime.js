function myFunction() {
    calculateTime(23,250);
}
function calculateTime(hour, angle){
var hourdiff;
var singlehour;
var minutecalc;
var finalmin;
	if(hour > 12)  // checks whether  the given hour is greater then 12
	{
	 hourdiff = hour-12
	}
	else
	{
	hourdiff = hour;
	}
	
	singlehour = angle /30  // calculates the angle difference  for hour ( each min consumes 30 Angle so from total calculates how many min)
	minutecalc = hourdiff+singlehour // adds the hour and min value to find the number of Minutes
	if(minutecalc != 12)
	{
		finalmin = minutecalc *5  // each difference of an minutes is 5 so difference is multiplied  by 5
	}
	else if(minutecalc == 12)
	{
	 finalmin = 00
	}
	if(finalmin > 60)  // if the diff is greater then 60 have to minus from 60 cz the min can take upto 60
	{
		finalmin =finalmin -60
	}

	
	return hourdiff+":"+finalmin;

}