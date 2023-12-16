// console.log("Traitement 1");
// console.log("Traitement 2");
var reponse = "..."
function testPromise() {
    return  new Promise((resolve, reject) => {
        let n = prompt('Veuillez saisir un entier');
        if(n < 10)
            resolve("Bon choix");
        else
        reject(new Error("Mauvais choix"))
    });
} 

async function execution() {
    reponse = await testPromise();
    console.log("Traitement : " + reponse);
    console.log("Traitement 5");
}

execution();    

