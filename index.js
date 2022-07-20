function writeCards(array, event){
    const thanks = [];
    for (let i=0; i<array.length; i++){
        thanks[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
return thanks;
}
function countDown(num){
    for(let i = 0; i<=num;i++){
        console.log(num-i);
    }
}