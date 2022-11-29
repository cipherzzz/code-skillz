// elliptic curve cryptography

import { ec as EC } from 'elliptic';
import { createHash } from 'crypto';

const ec = new EC('secp256k1');
ec.keyFromPrivate
const key = ec.genKeyPair();
const msg = 'Hello, world!';
const msgHash = createHash('sha256').update(msg).digest();
const signature = key.sign(msgHash);
const publicKey = key.getPublic('hex');
const signatureObj = {
    r: signature.r.toString('hex'),
    s: signature.s.toString('hex'),
};
const signatureString = JSON.stringify(signatureObj);
const signatureBuffer = Buffer.from(signatureString);
const signatureBase64 = signatureBuffer.toString('base64');
const signatureBase64Buffer = Buffer.from(signatureBase64, 'base64');
const signatureBase64String = signatureBase64Buffer.toString();
const signatureBase64Obj = JSON.parse(signatureBase64String);
const signatureBase64ObjBuffer = {
    r: Buffer.from(signatureBase64Obj.r, 'hex'),
    s: Buffer.from(signatureBase64Obj.s, 'hex'),
};
const verified = key.verify(msgHash, signatureBase64ObjBuffer);
console.log(verified);
