//Join, ovoj metod ja pecati nizata kako string, ako ne dodademe nisto ke bide oddelen so zapirki, mozeme da dodademe
// (" ") prazno mesto, ("i") itn... 

let niza = ["BMW", "Audi", "Peugeot", "Ford", "Porche", "Dacia"];
let a = niza.join ("   ");
console.log (a);

let b = niza.join ("  i  ");
console.log (b)