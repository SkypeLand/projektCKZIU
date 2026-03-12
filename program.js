let miastaInfo = [];
let wynik = document.querySelector('.wynik');

const pokazMiasto = () => {
    let wyborMiast = document.querySelector('.wyborMiast').value;
    
    if (!wyborMiast) {
        wynik.innerHTML = '<p>Wybierz miasto!</p>';
        return;
    }

    const miasto = miastaInfo.find(miasto => miasto.Value == wyborMiast);

    if (!miasto) {
        wynik.innerHTML = '<p>Wybrane miasto nie posiada informacji</p>';
        return;
    }

    wynik.innerHTML = `
        <h2>${miasto.Miasto}</h2>
        <h3>Atrakcje</h3>
        <p>${miasto.Atrakcje}</p>
        <h3>Ciekawostki</h3>
        <p>${miasto.Ciekawostki}</p>

    `
}

const startStrony = () => {
    fetch('./miasta.json')
    .then(response => response.json())
    .then(data => {
        miastaInfo = data;
    })
}

startStrony()