let words = [];

while (true) {
    let input = prompt("Add a word, type 'stop' to quit: ");

    if (input.toLowerCase() === "stop" && words.length === 0){
        console.log("No words to display, 'stop' was the first word entered.")
        break;

    } else if (input.toLowerCase() == "stop") {
        console.log(`you entered the following words: ${words}`);
        break;
    } else {
        words.push(input);
    }

}