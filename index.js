/**
 * Created by alexander on 2/6/16.
 */

$( document ).ready(function() {

    //Hide the card <div> on page load
    $('#card').hide();

    //ON INPUT MOUSE CLICK 'Go'
    //Run game loop
    $('#submit').click(function(){

        //cheeseball form validation (what are you gonna do about it, huh?)
        if (($('#total-cards').val() == undefined)
            || ($('#clef').val() == undefined)
            || ($('#speed').val() == undefined)
            || ($('#names').val() == undefined))
        {
            return;
        }

        //initialize the cards
        function initializeCards(total_cards, speed, show_cards, clef_title) {

            //show the card <div>
            $('#card').show();

            //declare our element variables
            var card = document.getElementById('card');
            var counter = card.querySelector('.counter');
            var cardname = card.querySelector('.cardname');
            var cardimage = card.querySelector('.cardimage');
            var cleftitle = card.querySelector('#clef-title');

            //this function refreshes the card
            function updateCard() {

                //Random whole number between 0 and max_range
                var random_number = Math.floor(Math.random() * max_range);

                //Display the total cards remaining
                counter.innerHTML = total_cards;

                //Display the chosen clef
                cleftitle.innerHTML = clef_title;

                //Display the random image.
                //My original idea was to make the cards small/medium/large since the goal is mastering sight reading, and sheet music always
                //comes in various typographical sizes. So it's best to train your brain to recognize the notes no matter what size. But I'm
                //not feeling much like implementing that right now.
                cardimage.innerHTML = '<img src="'+cards[random_number].src+'" height="400" width="300">';

                //If the user wants the card names displayed
                if(show_cards) {
                    cardname.innerHTML = cards[random_number].name;
                }

                //When the counter reaches 0
                if (total_cards <= 0) {

                    //clear our interval
                    clearInterval(interval);

                    //show the options again
                    $('.options').show();

                    //hide the cards again
                    $('#card').hide();
                }

                //subtract from the counter; repeat.
                total_cards--;
            }

            //function callback
            updateCard();

            //this is the heart of our speed/card drawing mechanism.
            var interval = setInterval(updateCard, speed);
        }

        //hide the options menu while the cards are running
        $('.options').hide();

        //if 'bass clef' is selected, total cards is 36 (0 - 35)
        //if 'treble clef' is selected, total cards is UNKNOWN, 50 is placeholder
        var max_range = $('#clef').val() == 0 ? 35 : 50;
        var cards = $('#clef').val() == 0 ? cards_bass : cards_treble;
        var clef_title = $('#clef').val() == 0 ? 'Bass Clef' : 'Treble Clef';
        var total_cards = $('#total-cards').val();
        var speed = $('#speed').val();
        var show_cards = $('#names').val() == 0;

        //Initialize our deck of flash cards.
        initializeCards(total_cards, speed, show_cards, clef_title);

    });

});


//Helper array to store the card objects.
//Right now a card consists only of a name and the path to an image.
var cards_bass = [
    {"src":"cards/bass/As2.PNG",
    "name":"A Sharp"},
    {"src":"cards/bass/As3.PNG",
    "name":"A Sharp"},
    {"src":"cards/bass/A2.PNG",
    "name":"A"},
    {"src":"cards/bass/A3.PNG",
    "name":"A"},
    {"src":"cards/bass/Ab2.PNG",
    "name":"A Flat"},
    {"src":"cards/bass/Ab3.PNG",
    "name":"A Flat"},
    {"src":"cards/bass/B2.PNG",
    "name":"B"},
    {"src":"cards/bass/B3.PNG",
    "name":"B"},
    {"src":"cards/bass/Bb2.PNG",
    "name":"B Flat"},
    {"src":"cards/bass/Bb3.PNG",
    "name":"B Flat"},
    {"src":"cards/bass/Cs2.PNG",
    "name":"C Sharp"},
    {"src":"cards/bass/Cs3.PNG",
    "name":"C Sharp"},
    {"src":"cards/bass/Cs4.PNG",
    "name":"C Sharp"},
    {"src":"cards/bass/C2.PNG",
    "name":"C"},
    {"src":"cards/bass/C3.PNG",
    "name":"C"},
    {"src":"cards/bass/C4.PNG",
    "name":"C"},
    {"src":"cards/bass/Ds2.PNG",
    "name":"D Sharp"},
    {"src":"cards/bass/Ds3.PNG",
    "name":"D Sharp"},
    {"src":"cards/bass/D2.PNG",
    "name":"D"},
    {"src":"cards/bass/D3.PNG",
    "name":"D"},
    {"src":"cards/bass/Db2.PNG",
    "name":"D Flat"},
    {"src":"cards/bass/Db3.PNG",
    "name":"D Flat"},
    {"src":"cards/bass/E2.PNG",
    "name":"E"},
    {"src":"cards/bass/E3.PNG",
    "name":"E"},
    {"src":"cards/bass/Eb2.PNG",
    "name":"E Flat"},
    {"src":"cards/bass/Eb3.PNG",
    "name":"E Flat"},
    {"src":"cards/bass/Fs2.PNG",
    "name":"F Sharp"},
    {"src":"cards/bass/Fs3.PNG",
    "name":"F Sharp"},
    {"src":"cards/bass/F2.PNG",
    "name":"F"},
    {"src":"cards/bass/F3.PNG",
    "name":"F"},
    {"src":"cards/bass/Gs2.PNG",
    "name":"G Sharp"},
    {"src":"cards/bass/Gs3.PNG",
    "name":"G Sharp"},
    {"src":"cards/bass/G2.PNG",
    "name":"G"},
    {"src":"cards/bass/G3.PNG",
    "name":"G"},
    {"src":"cards/bass/Gb2.PNG",
    "name":"G Flat"},
    {"src":"cards/bass/Gb3.PNG",
    "name":"G Flat"}
];

var cards_treble = [
    {"src":"#",
    "name":"none"
    }
];