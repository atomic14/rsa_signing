// see - https://nodejs.org/api/crypto.html#crypto_diffiehellman_getpublickey_encoding
const crypto = require('crypto');
const fs = require('fs');

var RSA_KEY_START = '-----BEGIN RSA PRIVATE KEY-----'
var RSA_KEY_END = '-----END RSA PRIVATE KEY-----'

// sign a message with the private key
const message = "This is a message from the emergency broadcasting system"

// read the hex string into a buffer
const privateKey = new Buffer(fs.readFileSync('private_key.hex').toString(), 'hex');
// convert to PEM format
const privateKeyPEM = RSA_KEY_START + '\n' + privateKey.toString('base64') + '\n' + RSA_KEY_END;

const sign = crypto.createSign('SHA256');
sign.write(message);
sign.end();

console.log(privateKeyPEM);

const signature = sign.sign(privateKeyPEM, 'hex');

console.log('set signature');

const signatureHex = signature.toString('hex');

fs.writeFileSync('singature.hex', signatureHex);
console.log('Wrote signature to signature.hex');
