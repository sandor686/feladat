//1 feladat 
function DiakInfo(nev, csoport, típus) {
    var viszater;
    var team = "[Team";
    var teamCsoport = team + "0" + csoport + "]";
    if (típus == true) {
        return viszater = nev + " " + teamCsoport + "- Junior Frontend";
    }
    else if (típus == false) {
        return viszater = nev + " " + teamCsoport + "- Webprogramozó";
    }
}
document.write(DiakInfo("Minta Márton", 8, true));
//2 feladat
function SzovegesErtekeles(jegy) {
    var Szorgalom = ["Példás,", "jó,", "Változó", "Hanyag"];
    var Magatartas = ["Példás", "Jó", "Változó", "Rossz"];
    if (jegy == 5) {
        return [Szorgalom[0], Magatartas[0]];
    }
    else if (jegy == 4) {
        return [Szorgalom[1], Magatartas[1]];
    }
    else if (jegy == 3) {
        return [Szorgalom[2], Magatartas[2]];
    }
    else if (jegy == 2) {
        return [Szorgalom[3], Magatartas[3]];
    }
}
document.write("<hr>" + SzovegesErtekeles(2));
//3 feladat
function HarommalOszthatokSzama(tomb) {
    var viszater = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            viszater++;
        }
    }
    return viszater;
}
document.write("<hr>" + HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
//4 feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var tomb = [];
    var eldont = true;
    var valtozo = 0;
    for (var i = 0; i < mennyiseg; i++) {
        valtozo = (Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        for (var y = 0; y < tomb.length; y++) {
            if (tomb[y] == valtozo) {
                eldont = false;
                mennyiseg++;
            }
        }
        if (eldont == true) {
            tomb.push(valtozo);
        }
        eldont = true;
    }
    return tomb;
}
document.write("<hr>" + Nyeroszamok(5, 1, 90));
