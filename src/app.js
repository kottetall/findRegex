// let testStrang = "test1*."
// extractRegex(testStrang)


document.querySelector("#inputString").addEventListener("keyup", (event)=>{
    let inputStringValue = event.target.value
    // let outputRegex = extractRegex(inputStringValue)
    let {foundRegexStringLong, foundRegexStringShort} = extractRegex(inputStringValue)


    document.querySelector("#outputStringLong").textContent = foundRegexStringLong
    document.querySelector("#outputStringShort").textContent = foundRegexStringShort
})