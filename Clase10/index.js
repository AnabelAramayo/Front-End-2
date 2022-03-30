function normalizeDemo (text) {
    text= removeEmptySpaces(text);
    text= setToLowerCasae(text);
    text= setFirstLetterInLowerCase(text);
    consoloe.log(text)
}

function removeEmptySpaces(text){
    return text.trim()
}

function setToLowerCase(text){
    return text.toLowerCase()
}

function setFirstLetterInLowerCase(text) {
    text[0]=text[0].toUpperCase();
    return text;
}

normalizeDemo('      estO es uN texto QUE debemos normalizar...      ')