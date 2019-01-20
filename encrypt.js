
/*
    do something to get answer only in decimals
*/

const crypto = {

    key: 'catchmeifyoucan', 

    hash: function(string, key) {
        const len = string.length
        let ASCII = undefined; 
        let vernomChar = undefined;    
        let output = [];

        if(key.length < string.length) {
            key += key
            console.log('----')
        }

        for (let i = 0; i < len; i++) {
            console.log(typeof string,i,len)
            ASCII = string.charCodeAt(i) ^ key.charCodeAt(i)
            vernomChar = String.fromCharCode(ASCII)
            output.push(vernomChar)
        }
        return output
    },

    encrypt: function(string) {
        return this.hash(string, this.key)
    },

    decrypt: function(string) {
        return this.hash(string, this.key)
    }
}

let text = 'abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
console.log(text)
let encrypted = crypto.encrypt('text')
let decrypted = crypto.decrypt(encrypted)

console.log('encrypted',encrypted)
console.log('decrypted',decrypted)


