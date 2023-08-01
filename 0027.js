// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str){
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let resultado = '';

    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(!vocales.includes(char)){
            resultado += char;
        }
    }

    return resultado;
}

console.log(disemvowel("This website is for losers LOL!"));