// veryfy the message with the public key
const verify = crypto.createVerify('SHA256');
verify.write(message);
verify.end();
const verified = verify.verify(publicKey, signature);

console.log('IsVerified by public key', verified);

const publicKey = fs.readFileSync('public_key.hex').toString();
