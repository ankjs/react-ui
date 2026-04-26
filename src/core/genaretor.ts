

//RENDOM NUMBER GENERATOR WITH LIMITION 
export const generateRendomUserID = (size: number) => {
  let num = 0;
  var numStr = num.toString();
  while (numStr.length < size) {
    numStr = 0 + numStr;
  }
  let a = 1000;
  let b = parseInt(1 + numStr);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};



export const generateRandomId = (size: number) => {
  let num = 0;
  var numStr = num.toString();
  while (numStr.length < size) {
    numStr = 0 + numStr;
  }
  let a = 1000;
  let b = parseInt(1 + numStr);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};


//  if you need to randomn number 
export const randomNumberInRange = (min:number, max:number) => {
  return Math.floor(Math.random()
    * (max - min + 1)) + min;
};


//IF YOU NEED TO RANDOM PATH OR TEXT 
export function generatRandomText(string_length:number) {
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqurstuvwxyz'
  for (var i = 0; i < string_length; i++) {
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_string
};


//IF YOU NEED TO RANDOM PATH OR TEXT WITH NUMBER 
export function genRandomKey(string_length:number) {
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqurstuvwxyz-_12345690';

  for (var i = 0; i < string_length; i++) {
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_string
};


