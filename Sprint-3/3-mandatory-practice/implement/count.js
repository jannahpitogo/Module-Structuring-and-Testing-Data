function countChar(stringOfCharacters, findCharacter) {
    const stringLength = stringOfCharacters.length;
   
    let count = 0;
    for (let i=0; i<stringLength; i++) {
        if (findCharacter === stringOfCharacters[i]){
            count = count + 1;
        }
    } 
    return count;
}

module.exports = countChar;