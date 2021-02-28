alert('Hello Everyone');

let StudentName;
let userfavTeam;
let userfavPlayer;
let userfavColor;

function PromptStudentName() {
    StudentName = prompt("Enter Your Name Please..");
    if (isNaN(StudentName) === false) {
        alert("You need to write a correct name!");
        PromptStudentName();
    } else if (StudentName == "'" || StudentName == "`" || StudentName == "!" || StudentName == "@" || StudentName == "#" || StudentName == "$" || StudentName == "%" || StudentName == "^" || StudentName == "&" || StudentName == "*" || StudentName == "(" || StudentName == ")" || StudentName == "-" || StudentName == "_" || StudentName == "+" || StudentName == "=" || StudentName == "/" || StudentName == "~" || StudentName == "<" || StudentName == ">" || StudentName == "," || StudentName == ";" || StudentName == ":" || StudentName == "|" || StudentName == "?" || StudentName == "{" || StudentName == "}" || StudentName == "[" || StudentName == "]" || StudentName == "¬" || StudentName == "£" || StudentName == ' " ' || StudentName == "\\") {
        alert("You need to write a correct name without symbol!");
        PromptStudentName();
    }
    return StudentName;
}

function PromptuserfavTeam() {
    userfavTeam = prompt('enter your favourite team: ');
    if (isNaN(userfavTeam) === false) {
        alert("You need to write a correct favourite Team name!");
        PromptuserfavTeam();
    } else if (userfavTeam == "'" || userfavTeam == "`" || userfavTeam == "!" || userfavTeam == "@" || userfavTeam == "#" || userfavTeam == "$" || userfavTeam == "%" || userfavTeam == "^" || userfavTeam == "&" || userfavTeam == "*" || userfavTeam == "(" || userfavTeam == ")" || userfavTeam == "-" || userfavTeam == "_" || userfavTeam == "+" || userfavTeam == "=" || userfavTeam == "/" || userfavTeam == "~" || userfavTeam == "<" || userfavTeam == ">" || userfavTeam == "," || userfavTeam == ";" || userfavTeam == ":" || userfavTeam == "|" || userfavTeam == "?" || userfavTeam == "{" || userfavTeam == "}" || userfavTeam == "[" || userfavTeam == "]" || userfavTeam == "¬" || userfavTeam == "£" || userfavTeam == ' " ' || userfavTeam == "\\") {
        alert("You need to write a correct favourite Team name without symbol!");
        PromptuserfavTeam();
    }
    return userfavTeam;
}

function PromptuserfavPlayer() {
    userfavPlayer = prompt('enter your favourite player: ');
    if (isNaN(userfavPlayer) === false) {
        alert("You need to write a correct favourite player name!");
        PromptuserfavPlayer();
    } else if (userfavPlayer == "'" || userfavPlayer == "`" || userfavPlayer == "!" || userfavPlayer == "@" || userfavPlayer == "#" || userfavPlayer == "$" || userfavPlayer == "%" || userfavPlayer == "^" || userfavPlayer == "&" || userfavPlayer == "*" || userfavPlayer == "(" || userfavPlayer == ")" || userfavPlayer == "-" || userfavPlayer == "_" || userfavPlayer == "+" || userfavPlayer == "=" || userfavPlayer == "/" || userfavPlayer == "~" || userfavPlayer == "<" || userfavPlayer == ">" || userfavPlayer == "," || userfavPlayer == ";" || userfavPlayer == ":" || userfavPlayer == "|" || userfavPlayer == "?" || userfavPlayer == "{" || userfavPlayer == "}" || userfavPlayer == "[" || userfavPlayer == "]" || userfavPlayer == "¬" || userfavPlayer == "£" || userfavPlayer == ' " ' || userfavPlayer == "\\") {
        alert("You need to write a correct favourite player name without symbol!");
        PromptuserfavPlayer();

    }
    return userfavPlayer;
}

function PromptuserfavColor() {
    userfavColor = prompt('enter your favourite color: ');
    if (isNaN(userfavColor) === false) {
        alert("You need to write a correct favourite color name!");
        PromptuserfavColor();
    } else if (userfavColor == "'" || userfavColor == "`" || userfavColor == "!" || userfavColor == "@" || userfavColor == "#" || userfavColor == "$" || userfavColor == "%" || userfavColor == "^" || userfavColor == "&" || userfavColor == "*" || userfavColor == "(" || userfavColor == ")" || userfavColor == "-" || userfavColor == "_" || userfavColor == "+" || userfavColor == "=" || userfavColor == "/" || userfavColor == "~" || userfavColor == "<" || userfavColor == ">" || userfavColor == "," || userfavColor == ";" || userfavColor == ":" || userfavColor == "|" || userfavColor == "?" || userfavColor == "{" || userfavColor == "}" || userfavColor == "[" || userfavColor == "]" || userfavColor == "¬" || userfavColor == "£" || userfavColor == ' " ' || userfavColor == "\\") {
        alert("You need to write a correct favourite color name without symbol!");
        PromptuserfavColor();
    }
    return userfavColor;
}

PromptStudentName();
PromptuserfavTeam();
PromptuserfavPlayer();
PromptuserfavColor();

alert('your name is: ' + StudentName);
alert('your favourite team is: ' + userfavTeam);
alert('your favourite player is: ' + userfavPlayer);
alert('your favourite Color is: ' + userfavColor);

console.log('your name is: ' + StudentName);
console.log('your favourite team is: ' + userfavTeam);
console.log('your favourite player is: ' + userfavPlayer);
console.log('your favourite Color is: ' + userfavColor);

let result_name = document.getElementById('name');
let result_favTeam = document.getElementById('team');
let result_favPlayer = document.getElementById('player');
let result_favColor = document.getElementById('color');

result_name.innerText = "Your name is >> " + StudentName + " >> and Your Welcome!";
result_favTeam.innerText = "Your favourite team is >> " + userfavTeam;
result_favPlayer.innerText = "Your favourite Player is >> " + userfavPlayer;
result_favColor.innerText = "Your favourite Color is >> " + userfavColor;