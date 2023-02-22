const string = 'testing'
var letterCount = new Map()

for (letter of string) {
    if("aeiou".includes(letter)){
        if(letterCount.has(letter)){
            letterCount.set(letter, letterCount.get(letter) + 1);
        }
        else{
            letterCount.set(letter, 1);
        }
    }
    
}
console.log(letterCount);