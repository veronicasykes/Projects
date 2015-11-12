var game = {
  correctCards: 0,
  ellapsedTime: 0,
  timer: null,
  player: 1,
  start: function(){
     game.timer = setInterval(function(){
      game.ellapsedTime++;
      gameTime1.text('TIME: ' + game.ellapsedTime);
    }, 1000);
  }
}

var winners = [];
function gameDone(){
    clearInterval(game.timer);
    winners.push(game.ellapsedTime);
    if (game.player === 1) {
        player1score.text(game.ellapsedTime)
    } else {
        player2score.text(game.ellapsedTime)
        if (winners[1] == winners[0]) {
            alert("Tie!");
        }
        if (winners[1] < winners[0]) {
            alert("Player 2 won!");
        } else {
            alert("Player 1 won!");
        }
    }
    ++game.player;
    buildGame();
}


var pairs = [
  {name: 'Key Lime Pie', pic: "https://goo.gl/wvvlAJ", index: 0},
  {name: 'Agave Blue Glow', pic: "https://goo.gl/qKiInS", index: 1},
  {name: 'Star Cactus', pic: "https://goo.gl/AWikPt", index: 2},
  {name: 'Calico Kitten', pic: "https://goo.gl/tL0t9c", index: 3},
  {name: 'Painted Lady', pic: "https://goo.gl/btLnlM", index: 4},
  {name: 'Woolly Rose', pic: "https://goo.gl/6WI8vh", index: 5},
  {name: 'Rainbow Hedgehog Cactus', pic: "https://goo.gl/hRkNLP", index: 6},
  {name: 'Tanzanian Zipper Plant', pic: "https://goo.gl/C0Tb9p", index: 7},
  {name: 'Baby Toes', pic: "https://goo.gl/OPJzpL", index:  8},
  {name: 'Thumb Cactus', pic: "https://goo.gl/ZxieC1", index: 9}
]
// $( init )
//
// // var turns;
// // var winner:
var gameTime1 = $('#game-time1');
// var gameTime2 = $('#game-time2');
var player1score = $('#player-one-score')
var player2score = $('#player-two-score')

// var counter;
//


$('#start-game').click(game.start);

//

//

function buildGame () {
    game.ellapsedTime = 0;
    var numbers = [];// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    for (var i = 0; i < pairs.length; i++) {
      numbers[i] = i;
    }
    console.log(numbers);
    numbers.sort( function() { return Math.random() - .5 } );

    $("#cardPile,#cardSlots").empty();

    for(var i = 0; i < pairs.length; i++){
      var card = $('<div data-index="' + pairs[numbers[i]].index + '">' + pairs[numbers[i]].name + '</div>')
        .draggable({
          containment: '#content',
          stack: '#cardPile div',
          cursor: 'move',
          revert: true
        });

      $( '#cardPile' ).append(card)
    }
    numbers.sort( function() { return Math.random() - .5 } );

    for(var i = 0; i < pairs.length; i++){
      var slot = $('<div data-index="' + pairs[numbers[i]].index + '">' + '<img src ="' + pairs[numbers[i]].pic + '">' + '</div>')
      .droppable({
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      });

      $( '#cardSlots' ).append(slot);
    }
}

    function handleCardDrop(event, ui){
      var cardIndex = ui.draggable.data( 'index' )
      var slotIndex = $(this).data('index');
      // console.log($(this).data('index'));
      // console.log(ui.draggable.data( 'index' ))
      // If the dropped card index matches the slot index, count as correct.

      if (cardIndex == slotIndex){
        console.log("correct")
        ui.draggable.addClass( 'correct' );
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
             ui.draggable.draggable( 'option', 'revert', false );
             game.correctCards++;
             //if (game.correctCards >= 1){
             //  gameDone();,
             //  return;
             //}
             if (game.correctCards >= pairs.length){
               gameDone();
               game.correctCards = 0;
             }
      } else {
        console.log("wrong")
      }

    }


buildGame();
