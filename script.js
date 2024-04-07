function makeid(length) {
   let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter ++;
    }
    return result; 
}
 
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
