

document.write("<center><font size=+3 style='color: green;'>");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
    document.write("Let's start our <i>Morning</i> with a new quote<br><br>");
    document.write("Keep spreading positivity, wherever you go. Good Morning!!!");
    document.write("<br><br><input type='button' value='New Quote'>")
} else if (hr == 12) {
    document.write("Let's start our <i>Noon</i> with a new quote<br><br>");
    document.write("The day of the sun is like the day of a king. It is a promenade in the morning, a sitting on the throne at noon, a pageant in the evening.")
} else if (hr >= 12 && hr <= 17) {
    document.write("Let's start our <i>Afternoon</i> with a new quote <br><br>");
    document.write("<font style='color: darkorange'> My hour for tea is half-past five, and my buttered toast waits for nobody.</font>");
    document.write("<br><br><input type='button' value='New Quote'>");
} else {
    document.write("Let's start our <i>Night</i> with a new quote<br><br>");
    document.write("Night is the wonderful opportunity to take rest, to forgive, to smile, to get ready for all the battles that you have to fight tomorrow.")
    document.write("<br><br><input type='button' value='New Quote'>");
}
document.write("</font></center>");





