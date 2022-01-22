// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const caesarCipher = encryptors.caesarCipher;
const reverseCipher = encryptors.reverseCipher;
const symbolCipher = encryptors.symbolCipher;

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    const val1 = caesarCipher(str, 4);
    const val2 = reverseCipher(val1);
    const val3 = symbolCipher(val2);
    return val3;
    
  }
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.;
    let val4 = symbolCipher(str);
    let val5 = reverseCipher(val4);
    let val6 = caesarCipher(val5, -4);
    return val6;

  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);
