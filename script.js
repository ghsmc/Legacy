var quotes = ["My one big mistake in life has been providing a trust fund for my five children. I’m very comfortable paying for an education for as long as they want to study in a reputable university. However, providing additional funds so they could have a lifestyle beyond what they have achieved on their own was a mistake.",
  "Choose work you enjoy and that serves as many people as possible. Focus on serving others — not on building wealth. Serve well, and money will follow.",
  "Surround yourself with the smartest, most ethical people you can find. Set clear goals, communicate them clearly, and delegate."]
var authors = ["Dick Reesch", "Norman Barrett", "Judy Ley Allen"]
var years = ["1960", "1961", "1963"]
var types = ["Relationships and Family", "Careers", "Business"]

change();

function change() {
  var R = getRandomInt(3);
  var classyear = "'" + years[R].slice(-2);

  document.getElementById("quote").innerHTML = quotes[R];
  document.getElementById("author").innerHTML = authors[R];
  document.getElementById("classyear").innerHTML = classyear;
  document.getElementById("type").innerHTML = types[R];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}