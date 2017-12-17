// unfortunately the built in node crypto doesn't create PEM encoded keys
// and we need PEM files for the sign and verify to work. We'll use ursa to
// generate the keys - https://www.npmjs.com/package/ursa

const forge = require('node-forge');
const fs = require('fs');

var keypair = forge.pki.rsa.generateKeyPair({bits: 2048, e: 0x10001});

var privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
var publicKey = forge.pki.publicKeyToPem(keypair.publicKey);

fs.writeFileSync('public_key.pem', publicKey);
fs.writeFileSync('private_key.pem', privateKey);

console.log("Wrote PublicKey to public_key.pem");
console.log(publicKey);
console.log("\n\n");
console.log("Wrote PrivateKey to private_key.pwm");
console.log(privateKey);
console.log("\n\n");
