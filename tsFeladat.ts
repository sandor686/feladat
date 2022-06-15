//1 feladat 
function DiakInfo(nev:string,csoport:number,típus:boolean):string{
    var viszater:any ;
    var team:string="[Team"
    var teamCsoport=team+"0"+csoport+"]";
    if(típus==true)
    {  
     return viszater=nev+" "+teamCsoport+"- Junior Frontend";
    }
    else if(típus==false)
    {
        return viszater=nev+" "+teamCsoport+"- Webprogramozó";
    }

}
document.write(DiakInfo("Minta Márton",8,true));

//2 feladat

function SzovegesErtekeles(jegy: number): [string,string] {
    var   Szorgalom:[string, string, string,string]=["Példás,","jó,","Változó","Hanyag"];
var   Magatartas:[string, string, string,string]=["Példás","Jó","Változó","Rossz"];
   
    if (jegy == 5) {
        return [Szorgalom[0],Magatartas[0]];
    }
    else if (jegy == 4) {
        return [Szorgalom[1],Magatartas[1]];
    }
    else if (jegy == 3) {
        return [Szorgalom[2],Magatartas[2]];
    }
    else if (jegy == 2) {
        return [Szorgalom[3],Magatartas[3]];
    }
   
    
}
document.write("<hr>"+SzovegesErtekeles(2));

//3 feladat
function HarommalOszthatokSzama(tomb:number[]):number{
    var viszater:number=0;
 for (let i=0;i<tomb.length;i++){
    if(tomb[i]%3==0){
        viszater++
    }
    
 }
 return viszater;

}
document.write("<hr>"+HarommalOszthatokSzama([10, 23,12, 24, 31, 33, 42, 20]));

//4 feladat
function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number):number[]{
    var tomb:number[]=[];
    var eldont:boolean=true;
    var valtozo:number=0;
 
    for(let i=0;i<mennyiseg;i++){
        valtozo=(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
           
                for(let y=0;y<tomb.length;y++){
                if(tomb[y]==valtozo){
                    eldont=false;
                    mennyiseg++;
                     }
            }
    if(eldont==true){
       tomb.push(valtozo);

        }
        eldont=true;
    }
    return tomb;
}
document.write("<hr>"+Nyeroszamok(5,1,90));