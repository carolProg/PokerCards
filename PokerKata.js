const informationCardGroup = ["c", "d", "h", "s"];
const informationCardDeck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];


function encode(input){
    let arrayEncoded = [];
    input.map(value => {
        let splittedValues = value.split("");
        let cardNumber = informationCardDeck.indexOf(splittedValues[0]);
        let cardGroupNumber = informationCardGroup.indexOf(splittedValues[1]);
        arrayEncoded.push((cardGroupNumber * informationCardDeck.length) + cardNumber);
    });
    return arrayEncoded.sort((a,b) => a - b);
}

function decode(input){
    let arrayDecoded = [];
    input.sort((a,b) => a -b )
    input.map(value => {
        let groupNumber = Math.floor(value / informationCardDeck.length);
        let cardGroupLetter = informationCardGroup[groupNumber];
        let cardLetter = informationCardDeck[value -groupNumber * informationCardDeck.length];
        arrayDecoded.push(cardLetter + cardGroupLetter.toString());
    });
    return arrayDecoded;
}

