function testRegexString(original, stringToTest){
    const stringToTestRegEx = new RegExp(stringToTest)
    return stringToTestRegEx.test(original)
}

function extractRegex(inputString){
    
    let foundRegexArrayLong = []

    const stringLetter = "[A-z]" // Är inte känslig för capslock
    const stringNumber = "\\d"
    const stringSymbol = "\\W" // behöver ändras, ger nog utslag på åäö etc //ger utslag på alla symboler

    const regexLetter = new RegExp(stringLetter)
    const regexNumber = new RegExp(stringNumber)
    const regexSymbol = new RegExp(stringSymbol) 


    for(let testChar of inputString){
        if(regexLetter.test(testChar)){
            foundRegexArrayLong.push(stringLetter)
        } else if(regexNumber.test(testChar)){
            foundRegexArrayLong.push(stringNumber)
        } else if(regexSymbol.test(testChar)){
            foundRegexArrayLong.push(stringSymbol)
        } else {
            console.log(`${testChar} wasn't caught by the function`)
        }
    }

    let foundRegexArrayShort = shortRegex(foundRegexArrayLong)

    let foundRegexStringLong = foundRegexArrayLong.join("")
    let foundRegexStringShort = foundRegexArrayShort.join("")

    // TEST AV FUNKTION
        // Testar så regexförslaget fungerar med den ursprungliga strängen - kvalitetskontroll
    if(testRegexString(inputString, foundRegexStringLong) && testRegexString(inputString, foundRegexStringShort)){
        return {foundRegexStringLong, foundRegexStringShort}
    } else {
        return "Something went wrong..."
    }
    // TEST AV FUNKTION ^^^^
}


function shortRegex(inputRegexArray=[]){

    const newShortArray = []

    // refact
    let lastValue = {
        symbol: "",
        sum: 0
    }

    for(let input of inputRegexArray){
        if(input == lastValue.symbol){
            lastValue.sum += 1
        } else {
            newShortArray.push(`${lastValue.symbol}{${lastValue.sum}}`)

            lastValue.symbol = input
            lastValue.sum = 1
        }
    }

    newShortArray.push(`${lastValue.symbol}{${lastValue.sum}}`) // För att få med sista värdet
    newShortArray.shift() // Tar bort första som blir tom

    return  newShortArray
}
