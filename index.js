//Random message arrays that will make up the sentences.
randArray1 = ['You', 'He', 'She', 'Them', 'I']
randArray2 = ['look', 'are', 'seem', 'must be','is'];
randArray3 = ['beautiful', 'pretty', 'gorgeous', 'smart', 'amazing'];


let randomWord1 = Math.floor(Math.random() * 5);
//let randomWord2 = Math.floor(Math.random() * 5);
//let randomWord3 = Math.floor(Math.random() * 5);

let finalArray = [];

finalArray.push(randArray1[randomWord1], randArray2[randomWord1], randArray3[randomWord1]);
console.log(finalArray);