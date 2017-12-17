// see - https://nodejs.org/api/crypto.html#crypto_diffiehellman_getpublickey_encoding
const crypto = require('crypto');
const fs = require('fs');

// sign a message with the private key
const message = "This is a message from the emergency broadcasting system"

// read the private key
const privateKey = fs.readFileSync('private_key.pem').toString();

// sign the message
const sign = crypto.createSign('SHA256');
sign.write(message);
sign.end();
const signature = sign.sign(privateKey, 'hex');
const signatureHex = signature.toString('hex');
// save it to file
fs.writeFileSync('signature.hex', signatureHex);

console.log('Wrote signature to signature.hex');
