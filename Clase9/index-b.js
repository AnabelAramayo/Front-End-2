window.onload = () => {
    console.log('index-b.js');
    let div = document.querySelector('div');

    for (let i = 0; i < 5; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175_1280.png');
        div.appendChild(img);
    }
};