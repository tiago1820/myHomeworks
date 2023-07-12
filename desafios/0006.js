// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    let compañeros = n;
    let paginas = m;
    let blankPages = 0;

    if(compañeros < 0 || paginas < 0){
       return 0;
    } else {
        blankPages = compañeros * paginas;
    }

    return blankPages;
}

console.log(paperwork(5, -5));
