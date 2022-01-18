const studente = {
    nome: 'Francesca',
    cognome: 'Pompi',
    eta: 28
};

for (let key in studente) {
    console.log(studente[key]);
}

let studenti = [
    {
        nome: 'Sergio',
        cognome: 'Minissale',
        eta: 23
    },
    {
        nome: 'Andrea',
        cognome: 'Conti',
        eta: 24
    },
    {
        nome: 'Roberta',
        cognome: 'Angioni',
        eta: 29
    }
];

for (let i = 0; i < studenti.length; i++) {
    let studenteCorrente = studenti[i];
    console.log('Nome: ' + studenteCorrente.nome);
    console.log('Cognome: ' + studenteCorrente.cognome);
}