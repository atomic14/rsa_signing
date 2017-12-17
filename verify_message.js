// veryfy the message with the public key
const crypto = require('crypto');
const fs = require('fs');

// What we think the message should be
const trueMessage = "This is a message from the emergency broadcasting system"

// read the public key
const publicKey = fs.readFileSync('public_key.pem').toString();

// read the signature making sure to convert from a buffer to a string
const signature = fs.readFileSync('signature.hex').toString();

const verify1 = crypto.createVerify('SHA256');
verify1.write(trueMessage);
verify1.end();
// make sure we tell verify that the signature is hex encoded
const trueMessageVerified = verify1.verify(publicKey, signature, 'hex');

console.log('True message is verified?:', trueMessageVerified);

// A bogus message that has been messed with
const bogusMessage = "Someone messed with this message";
const verify2 = crypto.createVerify('SHA256');
verify2.write(bogusMessage);
verify2.end();
// make sure we tell verify that the signature is hex encoded
const bogusMessageVerified = verify2.verify(publicKey, signature, 'hex');

console.log('Bogus message is verified?:', bogusMessageVerified);



