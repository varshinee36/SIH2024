// for(var i=1;i<=100;i++){
//     document.getElementById(i).innerHTML=i;
// }

//crime laws and punishment
var crime_laws = [
    {
        "Type": "Snake",
        "Number": 1,
        "Crime": "Discrimination of a person or unequal treatment by government authorities that violates the principle of equal protection under this law.",
        "Law": {
            "Part": 3,
            "Article": 15,
            "Description": "Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.",
            "Sub-article": 15
        },
        "Punishment": "Court orders remedies such as compensation for the aggrieved party and changes to discriminatory policies."
    },
    {
        "Type": "Snake",
        "Number": 2,
        "Crime": "Kidnapping minors for organ trade and sexual exploitation.",
        "Law": {
            "Part": 3,
            "Article": 23,
            "Description": "Prohibition of traffic in human beings and forced labour.",
            "Sub-article": 23
        },
        "Punishment": "Section 5: Imprisonment ranging from 7 years to life imprisonment, and fines."
    },
    {
        "Type": "Snake",
        "Number": 3,
        "Crime": "Making false statements about someone that damage their reputation.",
        "Law": {
            "Part": 3,
            "Article": 19,
            "Description": "Protection of certain rights regarding freedom of speech, etc.",
            "Sub-article": 19
        },
        "Punishment": "Imprisonment for up to 2 years."
    },
    {
        "Type": "Snake",
        "Number": 4,
        "Crime": "Killing sea turtles for their meat and for production of ornamental purposes.",
        "Law": {
            "Part": 4,
            "Article": "48A",
            "Description": "Protection and improvement of environment and safeguarding of forests and wildlife.",
            "Sub-article": "48A"
        },
        "Punishment": "Fines up to AUD 1.1 million and/or imprisonment for up to 7 years for offenses related to the illegal killing."
    },
    {
        "Type": "Snake",
        "Number": 5,
        "Crime": "Making false claims or using fraudulent documents to secure an inheritance.",
        "Law": {
            "Part": 4,
            "Article": 44,
            "Description": "Uniform civil code for the citizens.",
            "Sub-article": 44
        },
        "Punishment": "Imprisonment for up to 7 years and/or a fine up to ₹1,00,000."
    },
    {
        "Type": "Snake",
        "Number": 6,
        "Crime": "Damaging public property.",
        "Law": {
            "Part": 4,
            "Article": "51A",
            "Description": "Fundamental duties.",
            "Sub-article": "51A"
        },
        "Punishment": "Section 427: Imprisonment for up to 2 years, or a fine, or both."
    }
]

//fame laws and benefits
var fame_laws = [
    {
        "Type": "Ladder",
        "Number": 1,
        "Fame": "Providing free elementary education for every child from the age of six to fourteen years and mid-day meal scheme for all students.",
        "Law": {
            "Part": 3,
            "Article": "21A",
            "Description": "Right to education"
        }
        , "Benefits": "Better life for Indian citizens"
    },
    {
        "Type": "Ladder",
        "Number": 2,
        "Fame": "Recovery of Bengal tigers in Jim Corbett National Park helped in increasing the count of this endangered species.",
        "Law": {
            "Part": 4,
            "Article": "48A",
            "Description": "Protection and improvement of environment and safeguarding of forests and wildlife"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 3,
        "Fame": "Swachh Bharat Mission aimed to improve sanitation and cleanliness across India",
        "Law": {
            "Part": "4A",
            "Article": "51A",
            "Description": "Fundamental duties"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 4,
        "Fame": "In present days there were no rajas or maharaja titles were given for kings' successors.",
        "Law": {
            "Part": 3,
            "Article": 18,
            "Description": "Abolition of titles"
        }
        , "Benefits": "Better life for Indian citizens."

    },
    {
        "Type": "Ladder",
        "Number": 5,
        "Fame": "In 2022, the Indian government introduced a new initiative to increase the representation of women in the police force",
        "Law": {
            "Part": 3,
            "Article": 16,
            "Description": "Equality of opportunity in matters of public employment"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 6,
        "Fame": "A person gave a hilarious speech by pointing out the mistakes made by the ruling party Tamil Nadu",
        "Law": {
            "Part": 3,
            "Article": 19,
            "Description": "Protection of certain rights regarding freedom of speech, etc."
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 7,
        "Fame": "In 2022, some MLAs were arrested in a big corruption case; these MLAs were given the right to know the charges against them and had the opportunity to speak with their lawyers",
        "Law": {
            "Part": 3,
            "Article": 22,
            "Description": "Protection against arrest and detention in certain cases"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 8,
        "Fame": "Konkani has been recognized as a Schedule VIII language in the Indian Constitution, ensuring its promotion and preservation.",
        "Law": {
            "Part": 3,
            "Article": 29,
            "Description": "Protection of interests of minorities"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 9,
        "Fame": "In India every school maintains a secular environment where religious education is not part of the curriculum",
        "Law": {
            "Part": 3,
            "Article": 28,
            "Description": "Freedom as to attendance at religious instruction or religious worship in certain educational institutions"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 10,
        "Fame": "Free amenities center was launched in every state to feed the needy ones.",
        "Law": {
            "Part": 4,
            "Article": 47,
            "Description": "Duty of the state to raise the level of nutrition and standard of living and to improve public health"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 11,
        "Fame": "A single vote can make changes.",
        "Law": {
            "Part": "Preamble",
            "Article": "Democratic"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 12,
        "Fame": "A parent was arrested by police as he involved his 10-year-old son to work in the factory",
        "Law": {
            "Part": 3,
            "Article": 24,
            "Description": "Prohibition of employment of children in factories"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 13,
        "Fame": "In India all citizens are governed by the same law irrespective of any discrimination",
        "Law": {
            "Part": 4,
            "Article": 44,
            "Description": "Uniform civil code for the citizens"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 14,
        "Fame": "Local communities being able to handle their own problems and make decisions, helping to support local democracy and self-rule.",
        "Law": {
            "Part": 4,
            "Article": 40,
            "Description": "The organization of village panchayats"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 15,
        "Fame": "Company ABC provides additional maternity relief for women",
        "Law": {
            "Part": 4,
            "Article": 42,
            "Description": "Provision for just and humane conditions of work and maternity relief"
        }
        , "Benefits": "Better life for Indian citizens"

    },
    {
        "Type": "Ladder",
        "Number": 16,
        "Fame": "Lead actor helping and serving for the education of differently-abled children",
        "Law": {
            "Part": 4,
            "Article": 41,
            "Description": "Right to work, education, and public assistance in certain cases"
        }
        , "Benefits": "Better life for Indian citizens"

    }
]

// image slider
var arr = ['<img src="../assets/images/i8.png" id="poster">',
    '<img src="../assets/images/i10.png" id="poster">',
    '<img src="../assets/images/i9.jpg" id="poster">',
    '<img src="../assets/images/i4.jpg" id="poster">',
    '<img src="../assets/images/i6.jpg" id="poster">',
    '<img src="../assets/images/i2.jpg" id="poster">',
    '<img src="../assets/images/i1.jpg" id="poster">'
];

//dice array
var dice = ['<img src="../assets/images/1.png">',
    '<img src="../assets/images/2.png">',
    '<img src="../assets/images/3.png">',
    '<img src="../assets/images/4.png">',
    '<img src="../assets/images/5.png">',
    '<img src="../assets/images/6.png">'
];

// Assignments

var turn = 0;
var game_type;
var my_turn = 0;
var previousPositions = [0, 0, 0, 0]; // Array to keep track of previous positions for 4 players
var my_turn = 0;
var previousFirst = 0;
var previousSec = 0;
var previousThird = 0;
var previousFourth = 0;

//choose player func

function choose_player() {
    game_type = prompt('Choose number of players (2, 3, or 4)');
    if (game_type == 2) {
        setupGameForPlayers(2);
    } else if (game_type == 3) {
        setupGameForPlayers(3);
    } else if (game_type == 4) {
        setupGameForPlayers(4);
    } else {
        alert('Please choose a valid number of players: 2, 3, or 4!');
        game_type = undefined;
    }
}

// start func

function start() {
    if (game_type === undefined) {
        alert('FIRST CHOOSE THE NUMBER OF PLAYERS!');
        return;
    }

    const selectedColors = [];
    for (let i = 1; i <= game_type; i++) {
        const color = document.getElementById(`select${i}`).value;
        if (selectedColors.includes(color)) {
            alert('Please select different colors for each player!');
            return;
        }
        selectedColors.push(color);
    }

    document.getElementById('player1Button').innerHTML = 'PLAY';
    for (let i = 1; i <= 4; i++) {
        if (i <= game_type) {
            document.getElementById(`player${i}Button`).disabled = false;
        } else {
            document.getElementById(`player${i}Button`).disabled = true;
        }
    }

    document.getElementById('play').setAttribute('onclick', 'play()');

    // Assign player colors
    [p1, p2, p3, p4] = selectedColors;
    document.getElementById("select1").setAttribute("disabled", "disabled");
    if (game_type >= 2) document.getElementById("select2").setAttribute("disabled", "disabled");
    if (game_type >= 3) document.getElementById("select3").setAttribute("disabled", "disabled");
    if (game_type == 4) document.getElementById("select4").setAttribute("disabled", "disabled");
}

// image loading SLIDE  
setInterval(() => {
    turn++;
    if (turn == 4) {
        turn = 0;
    }
    document.getElementById('image_slide').innerHTML = arr[turn];
}, 3000);

function setupGameForPlayers(numPlayers) {
    document.getElementById('image_slide').style.visibility = 'hidden';
    for (let i = 1; i <= numPlayers; i++) {
        document.getElementById(`player${i}`).style.visibility = 'visible';
    }
    document.getElementById('dice').style.visibility = 'visible';

    // Add a class for 4 players
    if (numPlayers == 4) {
        document.getElementById('dice').classList.add('four-players');
    } else {
        document.getElementById('dice').classList.remove('four-players');
    }

    document.getElementById('choose_player').removeAttribute('onclick');
}


//updateing buttons
function updateButtonStates() {
    for (let i = 1; i <= game_type; i++) {
        const button = document.getElementById(`player${i}Button`);
        if (i === my_turn + 1) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
}

//play functions
function play() {
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('play1').style.visibility = 'visible';
    document.getElementById('choose_player').style.visibility = 'hidden';
    document.querySelector("#dice").classList.add("roll_dice");
    setTimeout(() => {
        document.querySelector("#dice").classList.remove("roll_dice");
    }, 200)

    var random_no = Math.floor(Math.random() * 6);
    document.getElementById("dice").innerHTML = dice[random_no];
    //2 player game
    if (game_type == 2) {
        if (my_turn == 0) {
            if (previousFirst > 0) {
                if (100 - previousFirst < random_no + 1) {
                    my_turn++;
                    return;
                }
                else {
                    document.getElementById((previousFirst).toString()).innerHTML = previousFirst;
                    document.getElementById((previousFirst).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousFirst + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=;transition=5s;font-size:xx-large;z-index:100></i>";
            document.getElementById((previousFirst + random_no + 1).toString()).style.color = p1;
            if ((previousFirst + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player1 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousFirst = previousFirst + random_no + 1;

            previousFirst = snake(previousFirst, p1, previousFirst);
            previousFirst = ladder(previousFirst, p1, previousFirst);
            my_turn++;
        }
        else {
            if (previousSec > 0) {
                if (100 - previousSec < random_no + 1) {
                    my_turn--;
                    return;
                }
                else {
                    document.getElementById((previousSec).toString()).innerHTML = previousSec;
                    document.getElementById((previousSec).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousSec + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large; transition=5s;z-index:100 ></i>";
            document.getElementById((previousSec + random_no + 1).toString()).style.color = p2;
            if ((previousSec + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player2 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousSec = previousSec + random_no + 1;
            previousSec = snake(previousSec, p2, previousSec);
            previousSec = ladder(previousSec, p2, previousSec);
            my_turn--;
        }
    }

    //3 player game

    else if (game_type == 3) {
        if (my_turn == 0) {
            if (previousFirst > 0) {
                if (100 - previousFirst < random_no + 1) {

                }
                else {
                    document.getElementById((previousFirst).toString()).innerHTML = previousFirst;
                    document.getElementById((previousFirst).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousFirst + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=;font-size:xx-large;transition=5s;z-index:30></i>";
            document.getElementById((previousFirst + random_no + 1).toString()).style.color = p1;
            if ((previousFirst + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player1 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousFirst = previousFirst + random_no + 1;

            previousFirst = snake(previousFirst, p1, previousFirst);
            previousFirst = ladder(previousFirst, p1, previousFirst);
            my_turn++;
        }
        else if (my_turn == 1) {
            if (previousSec > 0) {
                if (100 - previousSec < random_no + 1) {

                }
                else {
                    document.getElementById((previousSec).toString()).innerHTML = previousSec;
                    document.getElementById((previousSec).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousSec + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;transition=5s;z-index:100></i>";
            document.getElementById((previousSec + random_no + 1).toString()).style.color = p2;
            if ((previousSec + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player2 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousSec = previousSec + random_no + 1;
            previousSec = snake(previousSec, p2, previousSec);
            previousSec = ladder(previousSec, p2, previousSec);
            my_turn++;
        }
        else {
            if (previousThird > 0) {
                if (100 - previousThird < random_no + 1) {

                }
                else {
                    document.getElementById((previousThird).toString()).innerHTML = previousThird;
                    document.getElementById((previousThird).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousThird + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;transition=5s;z-index:30></i>";
            document.getElementById((previousThird + random_no + 1).toString()).style.color = p3;
            if ((previousThird + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player3 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousThird = previousThird + random_no + 1;
            previousThird = snake(previousThird, p3, previousThird);
            previousThird = ladder(previousThird, p3, previousThird);
            my_turn = 0;
        }
    }

    // 4 player game

    else if (game_type == 4) {

        if (my_turn == 0) {
            if (previousFirst > 0) {
                if (100 - previousFirst < random_no + 1) {

                }
                else {
                    document.getElementById((previousFirst).toString()).innerHTML = previousFirst;
                    document.getElementById((previousFirst).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousFirst + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=;font-size:xx-large;transition=5s;z-index:100></i>";
            document.getElementById((previousFirst + random_no + 1).toString()).style.color = p1;
            if ((previousFirst + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player1 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousFirst = previousFirst + random_no + 1;

            previousFirst = snake(previousFirst, p1, previousFirst);
            previousFirst = ladder(previousFirst, p1, previousFirst);
            my_turn++;
        }
        else if (my_turn == 1) {
            if (previousSec > 0) {
                if (100 - previousSec < random_no + 1) {

                }
                else {
                    document.getElementById((previousSec).toString()).innerHTML = previousSec;
                    document.getElementById((previousSec).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousSec + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;transition=5s;z-index:30></i>";
            document.getElementById((previousSec + random_no + 1).toString()).style.color = p2;
            if ((previousSec + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player2 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousSec = previousSec + random_no + 1;
            previousSec = snake(previousSec, p2, previousSec);
            previousSec = ladder(previousSec, p2, previousSec);
            my_turn++;
        }
        else if (my_turn == 2) {
            if (previousThird > 0) {
                if (100 - previousThird < random_no + 1) {

                }
                else {
                    document.getElementById((previousThird).toString()).innerHTML = previousThird;
                    document.getElementById((previousThird).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousThird + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;transition=5s;z-index:30></i>";
            document.getElementById((previousThird + random_no + 1).toString()).style.color = p3;
            if ((previousThird + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player3 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousThird = previousThird + random_no + 1;
            previousThird = snake(previousThird, p3, previousThird);
            previousThird = ladder(previousThird, p3, previousThird);
            my_turn++;
        }

        else {
            if (previousFourth > 0) {
                if (100 - previousFourth < random_no + 1) {

                }
                else {
                    document.getElementById((previousFourth).toString()).innerHTML = previousFourth;
                    document.getElementById((previousFourth).toString()).style.color = 'transparent';
                }
            }
            document.getElementById((previousFourth + random_no + 1).toString()).innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
            document.getElementById((previousFourth + random_no + 1).toString()).style.color = p4;
            if ((previousFourth + random_no + 1) == 100) {
                setTimeout(() => {
                    alert("player4 is winner !!");
                    window.location.reload();
                }, 800);

            }
            previousFourth = previousFourth + random_no + 1;
            previousFourth = snake(previousFourth, p4, previousFourth);
            previousFourth = ladder(previousFourth, p4, previousFourth);
            my_turn = 0;
        }

    }
    updateButtonStates();




}

//player colour chooseing box

function initializeGame() {
    updateButtonStates();
    document.getElementById('player1Button').style.visibility = 'hidden';
    document.getElementById('player2Button').style.visibility = 'hidden';
    document.getElementById('player3Button').style.visibility = 'hidden';
    document.getElementById('player4Button').style.visibility = 'hidden';
}

initializeGame();




//snake function

function snake(place_no, color_given, previous_player) {
    if (place_no == 26) {
        document.getElementById("26").innerHTML = 26;
        document.getElementById("26").style.color = 'transparent';

        document.getElementById("4").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("4").style.color = color_given;
        randomCrimeLaw(0);
        return 4;

    }
    else if (place_no == 94) {
        document.getElementById("94").innerHTML = 94;
        document.getElementById("94").style.color = 'transparent';
        document.getElementById("23").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("23").style.color = color_given;
        randomCrimeLaw(1);
        return 23;
    }
    else if (place_no == 63) {

        document.getElementById("63").innerHTML = 63;
        document.getElementById("63").style.color = 'transparent';
        document.getElementById("21").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("21").style.color = color_given;
        randomCrimeLaw(2);
        return 21;
    }
    else if (place_no == 80) {
        document.getElementById("80").innerHTML = 80;
        document.getElementById("80").style.color = 'transparent';
        document.getElementById("58").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("58").style.color = color_given;
        randomCrimeLaw(3);

        return 58;
    }
    else if (place_no == 73) {
        document.getElementById("73").innerHTML = 73;
        document.getElementById("73").style.color = 'transparent';
        document.getElementById("50").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("50").style.color = color_given;
        randomCrimeLaw(4);

        return 50;
    }
    else if (place_no == 97) {
        document.getElementById("97").innerHTML = 98;
        document.getElementById("97").style.color = 'transparent';
        document.getElementById("54").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("54").style.color = color_given;
        randomCrimeLaw(5);
        ;
        return 54;
    }
    else {
        return previous_player;
    }

}

//ladder function

function ladder(place_no, color_given, previous_player) {
    if (place_no == 3) {
        document.getElementById("3").innerHTML = 3;
        document.getElementById("3").style.color = 'transparent';
        document.getElementById("24").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("24").style.color = color_given;
        randomFameLaw(0);
        return 24;

    }
    else if (place_no == 28) {
        document.getElementById("28").innerHTML = 28;
        document.getElementById("28").style.color = 'transparent';
        document.getElementById("96").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("96").style.color = color_given;
        randomFameLaw(8);
        return 96;

    }
    else if (place_no == 8) {
        document.getElementById("8").innerHTML = 8;
        document.getElementById("8").style.color = 'transparent';
        document.getElementById("31").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("31").style.color = color_given;
        randomFameLaw(5);
        return 31;

    }
    else if (place_no == 61) {
        document.getElementById("61").innerHTML = 61;
        document.getElementById("61").style.color = 'transparent';
        document.getElementById("99").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("99").style.color = color_given;
        randomFameLaw(4);
        return 99;

    }
    else if (place_no == 72) {
        document.getElementById("72").innerHTML = 72;
        document.getElementById("72").style.color = 'transparent';
        document.getElementById("91").innerHTML = "<i class='fas fa-chess-pawn' style=font-size:xx-large;z-index:30></i>";
        document.getElementById("91").style.color = color_given;
        randomFameLaw(13);
        return 91;
    }
    else {
        return previous_player;
    }
}


document.querySelector(".fa-circle-xmark").addEventListener("click", function (params) {
    document.querySelector(".rules-panel").classList.add("close-rules")
})

document.querySelector(".rules-panel").classList.remove("close-rules")

//crime_law function

function randomCrimeLaw(a) {
    if (crime_laws.length === 0) {
        document.querySelector("body").innerHTML += `
            <div class="douknow">
                <h1>No more crime laws to show!</h1>
            </div>`;
        return;
    }

    let noOfLaws = crime_laws.length;
    // let rand = Math.floor(Math.random() * noOfLaws);
    let rand = a;

    let currLaw = crime_laws[rand];

    let contentHtml = `
        <div class="douknow">
            <h1>DO YOU KNOW?</h1>
            <p><strong>Crime:</strong> ${currLaw.Crime}</p>
            <p><strong>Law:</strong> Part ${currLaw.Law.Part}, Article ${currLaw.Law.Article}, ${currLaw.Law.Description}${currLaw.Law["Sub-article"] ? ', ' + currLaw.Law["Sub-article"] : ''}</p>
            <button class="continue">Continue</button>
        </div>`;

    document.querySelector(".law-hold").innerHTML = contentHtml;

    let x = document.querySelector(".law-hold");
    x.classList.add("active-law");

    document.querySelector(".continue").addEventListener("click", () => {
        x.classList.remove("active-law");
        randomCrimeLawPunish();
    });

    crime_laws.splice(rand, 1);
}

//fame_laws function

function randomFameLaw(a) {
    // Check if there are any fame laws left to select
    if (fame_laws.length === 0) {
        document.querySelector("body").innerHTML += `
            <div class="douknow">
                <h1>No more fame laws to show!</h1>
            </div>`;
        return;
    }

    let noOfLaws = fame_laws.length;

    // Generate a random index
    // let rand = Math.floor(Math.random() * noOfLaws);

    let rand = a;

    let currLaw = fame_laws[rand];

    let contentHtml = `
        <div class="douknow">
            <h1>DO YOU KNOW?</h1>
            <p><strong>Fame:</strong> ${currLaw.Fame}</p>
            <p><strong>Law:</strong> Part ${currLaw.Law.Part}, Article ${currLaw.Law.Article}, ${currLaw.Law.Description}${currLaw.Law["Sub-article"] ? ', ' + currLaw.Law["Sub-article"] : ''}</p>
            <button class="continue">Continue</button>
        </div>`;

    document.querySelector(".law-hold").innerHTML = contentHtml;
    let x = document.querySelector(".law-hold");
    x.classList.add("active-law");
    document.querySelector(".continue").addEventListener("click", () => {
        x.classList.remove("active-law");
        randomFameLawBenefits();
    });

    fame_laws.splice(rand, 1);
}

// crime law punishment function

function randomCrimeLawPunish() {

    if (crime_laws.length === 0) {
        document.querySelector("body").innerHTML += `
            <div class="douknow2">
                <h1>No more crime laws to show!</h1>
            </div>`;
        return;
    }

    let noOfLaws = crime_laws.length;

    let rand = Math.floor(Math.random() * noOfLaws);

    let currLaw = crime_laws[rand];

    let contentPunishHtml = `<div class="douknow2">
            <h1>DO YOU KNOW?</h1>
            <p><strong>Punishment For The Crime:</strong> ${currLaw.Punishment}</p>
            <button class="continue2">Continue</button>
        </div>`;

    document.querySelector(".law-hold2").innerHTML = contentPunishHtml;

    let x = document.querySelector(".law-hold2");
    x.classList.add("active-law2");

    document.querySelector(".continue2").addEventListener("click", () => {

        x.classList.remove("active-law2");
    });

    crime_laws.splice(rand, 1);
}













function randomFameLawBenefits() {
    // Check if there are any crime laws left to select
    if (crime_laws.length === 0) {
        document.querySelector("body").innerHTML += `
            <div class="douknow">
                <h1>No more crime laws to show!</h1>
            </div>`;
        return;
    }


    // Get the number of fame laws available
    let noOfLaws = fame_laws.length;

    // Generate a random index
    let rand = Math.floor(Math.random() * noOfLaws);

    // Get the fame law at the random index
    let currLaw = fame_laws[rand];



    let contentBenefitsHtml = `<div class="douknow">
            <h1>DO YOU KNOW?</h1>
            <p><strong>Benefits For The Fame:</strong> ${currLaw.Benefits}</p>
            <button class="continue">Continue</button>
        </div>`;


    document.querySelector(".law-hold").innerHTML = contentBenefitsHtml;


    // Add the active-law class to display the modal
    let x = document.querySelector(".law-hold");
    x.classList.add("active-law");

    // Add event listener to the continue button
    document.querySelector(".continue").addEventListener("click", () => {
        // Remove the active-law class to hide the modal
        x.classList.remove("active-law");
    });

    // Remove the displayed law from the array
    crime_laws.splice(rand, 1);
}




function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');

}
