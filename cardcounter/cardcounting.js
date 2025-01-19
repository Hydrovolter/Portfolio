const MIN_INTERVAL = 0.1;
const MAX_INTERVAL = 60;
const MIN_TURNS = 1;
const MAX_TURNS = 500;

var count = 0;
var turns = 20;
var sessionActive = false; 
var countVisible = false; 

var SUITS = ["clubs", "diamonds", "hearts", "spades"];
var CARDS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
var count_map = {
  '2': 1,
  '3': 1,
  '4': 1,
  '5': 1,
  '6': 1,
  '7': 0,
  '8': 0,
  '9': 0,
  '10': -1,
  'j': -1,
  'q': -1,
  'k': -1,
  'a': -1
};

var getNextCard = function() {
  var rand_suit1 = SUITS[Math.floor(Math.random() * SUITS.length)];
  var rand_card1 = CARDS[Math.floor(Math.random() * CARDS.length)];
  var rand_suit2 = SUITS[Math.floor(Math.random() * SUITS.length)];
  var rand_card2 = CARDS[Math.floor(Math.random() * CARDS.length)];
  count += count_map[rand_card1] + count_map[rand_card2];
  $('#curcount').html(count);
  $('#curcard1').attr('src', "img/" + rand_suit1 + "-" + rand_card1 + "-150.png");
  $('#curcard2').attr('src', "img/" + rand_suit2 + "-" + rand_card2 + "-150.png");
};

var updateTurnDisplay = function() {
  $('#current-turn').html("Turn " + cur_turn + " / " + turns);
};

var cur_turn = 0;
var start = function() {
  getNextCard();
  cur_turn += 1;
  updateTurnDisplay();  // Update the display after each turn

  if (cur_turn == turns) {
    sessionActive = false; 
    if (!$('#displaycount').length) {
      $("#info").append($("<input id='displaycount' type='button' value='show count'>").click(function() {
        countVisible = !countVisible; 
        if (countVisible) {
          $('#curcount').show();
          $(this).val("hide count");
        } else {
          $('#curcount').hide();
          $(this).val("show count");
        }
      }));
    }
  } else {
    setTimeout(start, interval);
  }
};

$(document).ready(function() {
  $('#curcount').hide();

  $('#curcard1').attr('src', "img/facedown-150.jpg");
  $('#curcard2').attr('src', "img/facedown-150.jpg");

  count = 0;
  cur_turn = 0;

  $('#cardcountingform').submit(function(event) {
    event.preventDefault();

    var intervalInput = $("#interval").val();
    var turnsInput = $("#turns").val();

    if (isNaN(intervalInput) || Number(intervalInput) < MIN_INTERVAL || Number(intervalInput) > MAX_INTERVAL) {
      alert("Please enter a valid interval (between " + MIN_INTERVAL + " and " + MAX_INTERVAL + " seconds).");
      return;
    }

    if (!Number.isInteger(Number(turnsInput)) || Number(turnsInput) < MIN_TURNS || Number(turnsInput) > MAX_TURNS) {
      alert("Please enter a valid number of turns (between " + MIN_TURNS + " and " + MAX_TURNS + ").");
      return;
    }

    if (sessionActive) {
      alert("A session is already in progress.");
      return;
    }

    sessionActive = true;
    interval = 1000 * Number(intervalInput);
    turns = Number(turnsInput);
    count = 0;
    cur_turn = 0;
    start();
  });
});
