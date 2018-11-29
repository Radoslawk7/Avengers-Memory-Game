$(function() {

  const heroes = [
    "hulk",
    "hulk",
    "widow",
    "widow",
    "iron",
    "iron",
    "thor",
    "thor",
    "hawkeye",
    "hawkeye",
    "captain",
    "captain"
  ];

  let cards = $("div");
  cards = [...cards];
  let activeCard = "";
  const activeCards = [];
  const gamePairs = cards.length / 2;
  let gameResult = 0;

  const clickCard = function() {
    activeCard = this;

    if (activeCard == activeCards[0]) return;

    $(this).removeClass("hidden");

    if (activeCards.length === 0) {
      activeCards[0] = activeCard;
      return;
    } else {
      cards.forEach(card => $(card).off("click", clickCard));
      activeCards[1] = activeCard;

      setTimeout(function() {
        if (activeCards[0].className === activeCards[1].className) {
          activeCards.forEach(card => $(card).addClass("off"));
          gameResult++;
          cards = cards.filter(card => !$(card).hasClass("off"));
          console.log("wygrana");

          if (gamePairs == gameResult) {
            $(".firstTeam").html("<h2>You Win :)</h2>");
            $(".secondTeam").html("<button>Play one more time</button>");

            const refresh = () => location.reload();

            $("button").on("click", refresh);
          }
        } else {
          activeCards.forEach(card => $(card).addClass("hidden"));
          console.log("przegrana");
        }
        activeCard = "";
        activeCards.length = 0;
        cards.forEach(card => $(card).on("click", clickCard));
      }, 500);
    }
  };

  const start = function() {
    cards.forEach(card => {
      const position = Math.floor(Math.random() * heroes.length);
      $(card).addClass(heroes[position]);
      heroes.splice(position, 1);
    });
  };
  start();

  setTimeout(function() {
    cards.forEach(card => {
      $(card).addClass("hidden");
      $(card).on("click", clickCard);
    });
  }, 2000);
});

// let heroOne = $(".FirstTeam .cardOne");
// let heroTwo = $(".SecondTeam .cardTwo");

//   const Heroes = [
//     "../Images/Heroes/Hawkeye.jpg",
//     "../Images/Heroes/captain-america.jpg",
//     "../Images/Heroes/Hulk.jpg",
//     "../Images/Heroes/IronMan.jpg",
//     "../Images/Heroes/Thor.jpg",
//     "../Images/Heroes/BlackWidow.jpg"
//   ];

// $('.BattleArena')

// $('.boxOne')

//   HeroOne.on("click", function() {
//     HeroOne.addClass('hulk')
//   });

//   HeroTwo.on("click", function() {
//     HeroTwo.css("background-image", ".hulk)");
//   });

// $(".FirstTeam").find("span").css('background-image', '../Images/Heroes/Hawkeye.jpg');

// $('.FirstTeam .boxOne').on('click', function () {

//     if ($(this).hasClass('boxOne')) {
//         $(this).removeClass('boxOne');
//         $(this).parent().css('border', "1px solid #ccc")
//     } else {
//         $(this).addClass('boxOne');
//         $(this).parent().css('border', "5px solid green")
//     }

// });
// });
