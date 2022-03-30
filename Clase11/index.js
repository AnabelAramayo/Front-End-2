function normalizeDemo(text) {
    text = removeEmptySpaces(text);
    text = setToLowerCase(text);
    text = setFirstLetterToUpperCase(text);
    text = removeEmptySpacesBetween(text);
    text = setFirstWordToUpperCase(text);
    console.log(text);
}

function removeEmptySpaces(text) {
    return text.trim();
}

function setToLowerCase(text) {
    return text.toLowerCase();
}

function setFirstLetterToUpperCase(text) {
    // return text.replace(text[0], text[0].toUpperCase());
    return text[0].toUpperCase() + text.slice(1);
    // text[0].toUpperCase() == E
    // text.slice(1) == sto es un texto que debemos normalizar
}

function removeEmptySpacesBetween(text) {
    return text.replaceAll(' ', '-');
}

function setFirstWordToUpperCase(text) {
    let textToReturn = '';
    let i = 0;
    let array = text.split('-');

    // Opción 1
    // array.forEach(word => {
    //     let separator = i < array.length - 1 ? '-' : '';
    //     textToReturn += setFirstLetterToUpperCase(word) + separator;
    //     i++;
    // });

    // Opción 2
    array.forEach(word => {
        array[i] = setFirstLetterToUpperCase(word);
        i++;
    });
    textToReturn = array.join('-');

    return textToReturn;
}

normalizeDemo('    estO es uN texto QUE debemos normalizar..    ');

let charactersAllowed = ['a', 'b', 'c', 'd'];
document.querySelector('#nombre').addEventListener('keypress', (e) => {
    // if (isNaN(e.key) == false) {
    //     e.preventDefault();
    // }

    if (charactersAllowed.includes(e.key) == false) {
        e.preventDefault();
    }
});

let counter = 0;
let checks = document.getElementsByName('hobbies');
checks.forEach(check => {
    check.addEventListener('click', function(e) {
        if (this.checked) {
            if (counter >= 4) {
                showMessage('No se puede seleccionar mas de 4 hobbies.');
                e.preventDefault();
            } else {
                counter++;
            }
        } else {
            showMessage('');
            counter--;
        }
        console.log(this.checked, counter);
    });
});

function showMessage(message) {
    let error = document.querySelector('.errors');
    if (message != '') {
        error.innerHTML = `<p>${message}</p>`;
    } else {
        error.innerHTML = '';
    }
}

let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

let email = document.querySelector('#email');
email.addEventListener('blur', function() {
    if (regex.test(email.value) == false) {
        showMessage('El email es inválido.');
    } else {
        showMessage('');
    }
});