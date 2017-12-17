// see - https://nodejs.org/api/crypto.html#crypto_diffiehellman_getpublickey_encoding
const crypto = require('crypto');
const fs = require('fs');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);

const publicKey = alice.generateKeys("hex");
const privateKey = alice.getPrivateKey("hex")

fs.writeFileSync('public_key.hex', publicKey);
fs.writeFileSync('private_key.hex', privateKey);

console.log("Wrote PublicKey to public_key.hx");
console.log(publicKey);
console.log("-------------------------------------\n");
console.log("Wrote PrivateKey to private_key.hx");
console.log(privateKey);
console.log("-------------------------------------\n");
