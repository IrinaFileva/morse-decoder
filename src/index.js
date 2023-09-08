const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    const one = expr.split('');
    const arr =[]; 
    
    for (let i = 0; i < one.length; i + 10){
        arr.push(one.splice(0, 10)); 
    };
    
    const arr1 = arr.join(', ').replaceAll(',','').replaceAll('11','-').replaceAll('10','.').replaceAll('00','');
    const arr2 = arr1.split(' ');
    const finArr = [];
    
    for(let key of arr2){
        if(key in MORSE_TABLE){
            finArr.push(MORSE_TABLE[key]);
       } else {
          finArr.push(' ');
       }
      }
      return finArr.join().replaceAll(',','')
}
     

     


module.exports = {
    decode
}