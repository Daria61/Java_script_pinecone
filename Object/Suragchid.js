let students = [
    Gonchigsumlai = {
        birthYear : 1999,
        hobby : "Horse",
        single : false
    },
    BilguunB =  {
        birthYear : 2000,
        hobby : "sleep",
        single : true
    },
    Darga = {
        birthYear : 1989,
        hobby : "sing",
        single : false
    },
    Huslen = {
        birthYear : 2002,
        hobby : "soccer",
        single : false
    },
    Orgil = {
        birthYear : 2002,
        hobby : "sleep",
        single : false
    },
    AmaraaJ =  {
        birthYear : 2005,
        hobby : "watching anime",
        single : true
    },
    Manlai =  {
        birthYear : 1999,
        hobby : "playing ukulele",
        single : true
    },
    Byamba = {
        birthYear : 1990,
        hobby : "accounting",
        single : false
    },
    Taami = {
        birthYear : 1999,
        hobby : "playing dota",
        single : false
    },
    Ganzoo = {
        birthYear : 2004,
        hobby : "watching anime",
        single : true
    },
    Daria = {
        birthYear : 2004,
        hobby : "reading",
        single : true
    },
    Jack = {
        birthYear : 1999,
        hobby : "chess",
        single : false
    },
    Bebe = {
        birthYear : 2004,
        hobby : "sportmen ",
        single : true 
    },
    AmaraaT  = {
        birthYear : 1994,
        hobby : "making money",
        single : false
    },
    Dulguun =  {
        birthYear : 1997,
        hobby : "singing ",
        single : false
    },
    Nado = {
        birthYear : 1997,
        hobby : "reading book",
        single : true 
    },
    Bilguun = {
        birthYear : 1995,
        hobby : "taking pic",
        single : false
    },
    Muugii = {
        birthYear : 1997,
        hobby : "soccer",
        single : true
    },
    Oochka = {
        birthYear : 1997,
        hobby : "sleeping",
        single : false
    },
    Taivanaa = {
        birthYear : 2003,
        hobby : "drawing",
        single : true
    },
    Niko = {
        birthYear : 1993,
        hobby : "playing com game",
        single : false
    },
    BilguunBagsh = {
        birthYear : 1995,
        hobby : "playing CSGO",
        single : false
    },
    Oyuka = {
        birthYear : 1991,
        hobby : "sleeping, table tense ",
        single : false
    }
]
function nasandHursen (object){
    let w = 0
    for (i = 0; i < object.length; i ++){
        if ((2022 - object[i].birthYear) > 20 ){
            console.log(object[i]);
            w++
        }
    }
    console.log(w);
}
function nas (object){
    for (i = 0; i < object.length; i ++){
        console.log(2022 - object[i].birthYear);
    }
}

function isSingle (object){
    let w = 0
    for (i = 0; i < object.length; i ++){
        if (object[i].single){
            console.log(object[i]);
            w++
        }
    }
    console.log(w);

}
isSingle(students)



