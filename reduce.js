//Reduce, ovaa funkcija ja reducira nizata vo edna vrednost, odnosno ja egzekutira dadenata funkcija za sekoja vrednost na nizata (od levo na desno)
//Sintaksata na ovaa funkcija e porazlicna od drugite, odnosno mora da zadademe vrednost od kade sto ke pocne funkcijata, vo ovoj slucaj 0, vo situacija koga ni treba proizvod pocnuvame od 1


const numbers = [15, 356, 25, 89, 46, 402, 16, 58, 259]

const total = numbers.reduce ((Currenttotal, number)=>{
    return Currenttotal+number

},0)
console.log (total)

const odzemanje = numbers.reduce ((Currenttotal, number)=>{
    return Currenttotal-number

},0)
console.log (odzemanje)

const mnozenje = numbers.reduce ((Currenttotal,number)=>{
    return Currenttotal*number
},1)
console.log(mnozenje)

