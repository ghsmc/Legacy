
runOncePerDay();

Quotes = ["Quote1", "Quote2", "Quote3", "Quote4", "Quote5"];
Authors = ["Author1 '23", "Author2 '23", "Author3 '23", "Author4 '23", "Author5 '23"];
Type = ["Type1","Type2","Type3","Type4","Type5"];

function hasOneDayPassed()
  // get today's date. eg: "7/37/2007"
  let date = new Date().toLocaleDateString();

  // if there's a date in localstorage and it's equal to the above: 
  // inferring a day has yet to pass since both dates are equal.
  if( localStorage.yourapp_date == date )  {
      return false;

  // this portion of logic occurs when a day has passed
  localStorage.yourapp_date = date;
  return true;
}


// some function which should run once a day
function runOncePerDay(){
//   if( !hasOneDayPassed() ) return false;
    random = Math.floor(Math.random() * 6);
    document.getElementById("quote").innerHTML(Quotes[random]);
    document.getElementById("author").innerHTML(Authors[random]);
    document.getElementById("type").innerHTML(Type[random]);
}