$(document).foundation()

var fruits = ["Banana", "Orange", "Apple", "Mango", "Blackberry ", "Grapes", "Pineapple"];

// Llenado de fruits
var selectfruit = document.getElementById("selectfruit");


fruitArray = function() {
  var htmlString ="";
  for (var i = 0; i < fruits.length; i++) {
    htmlString += '<option>';
    htmlString += fruits[i];
    htmlString += '</option>';
  }
  selectfruit.innerHTML += htmlString;
};
fruitArray();


var showFruitlike = document.getElementById("showFruitlike");


var dclickp = document.getElementById("bclick");

dclickp.onclick = function() {
  showFruitlikeF();
}

var htmlString = "";
showFruitlikeF = function() {
  htmlString = '<div class="success callout" data-closable';
  htmlString += '>';
  htmlString += ' <h2>You have been subscribed to our newsletter!</h2>';
  htmlString += ' <p class="sub-h2 especialSubscrption">To ensure that the newsletter also reaches you and does not end up in the spam filter, please enter the sender address news@aferiapreject.com in your e-mail program’s address book.</p>';
  htmlString += '<button class="close-button" aria-label="Dismiss alert" type="button" data-close> <span aria-hidden="true">&times;</span>';
  htmlString += '</div>';


  // <h2>You Deserve Fruit and Veggie Juice Every Day!</h2>

  showFruitlike.innerHTML = htmlString;
  console.log(htmlString);
};
