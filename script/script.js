
// Make an object with the fields morse, eng, and the user's input and it can have functions that do what you need to do


// Goal is: a -> ".- " and " " -> "|"
// Grab the array index at which the letter you need to convert to morse code is stored
// Then you know what the index is of the element from the morse array that you need to replace that letter with
function toMorse() {
    morse = ['|', '.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
    eng = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let input = document.getElementById("input-box").value;
    input = input.toUpperCase();

    let message = input.split('');

    for (let i = 0; i < message.length; i++) {
        let index = indexOf(eng, message[i]);   // Index at which the letter we are trying to translate sits in the eng array

        if (i != message.length - 1) {
            message[i] = morse[index] + " ";  // Assign our english character the value stored in the element of the morse array (with space to separate morse letters)
        }
        else {
            message[i] = morse[index];    // Assign our english character the value stored in the element of the morse array (without space because we are at the last letter)
        }
    }
    print(message);
}

function indexOf(list, element) {;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == element) return i;
    }
    return 0;

    
}

function toEnglish() {
    morse = ['|','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
    eng = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let input = document.getElementById("input-box").value;

    // Split it at each space to get elements consisting of letters in morse instead of individual characters
    let message = input.split(' ');

    for (let i = 0; i < message.length; i++) {
        let index = indexOf(morse, message[i]); // At which index is the current character of the input in the morse array?
        message[i] = eng[index];  // Convert that character to its english equivalent
    }

    print(message);
}

function print(conversion) {
    let translation = "";
    for (let i = 0; i < conversion.length; i++) {
        translation += conversion[i];
    }
    document.getElementById("translation-box").value = translation;
}

function clearBox() {
    //alert("in clear");
    document.getElementById("input-box").value = "";
    document.getElementById("translation-box").value = "";
}