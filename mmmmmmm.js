console.log();
console.log('Numer Zadania');
console.log('----------------');
console.log();
let lista_kontaktow = [
    {
        Name:"gabriel steniatyn",
        Phone:"(0191) 719 6495",
        Email:"Curabitur.egestas.nunc@nonummyac.co.uk",
    },
    {
        Name:"Raja Villarreal",
        Phone:"0866 398 2895",
        Email:"posuere.vulputate@sed.com",
    },
    {
        Name:"Helen Richards",
        Phone:"0800 1111",
        Email:"libero@convallis.edu",
    }
];
let imie1 = lista_kontaktow[0].Name;
let imie2 = lista_kontaktow[1].Name;
let imie3 = lista_kontaktow[2].Name;
let numerTel1 = lista_kontaktow[0].Phone;
let numerTel2 = lista_kontaktow[1].Phone;
let numerTel3 = lista_kontaktow[2].Phone;
let mail1 = lista_kontaktow[0].Email;
let mail2 = lista_kontaktow[1].Email;
let mail3 = lista_kontaktow[2].Email;

let kontakt = {
    Name:"Maisie Haley",
    Phone:"0913 521 3030",
    Email:"risus.Quisque@urna.ca",
};
lista_kontaktow.push(kontakt);
console.log(lista_kontaktow[0]);
console.log(lista_kontaktow[lista_kontaktow.length-1]);