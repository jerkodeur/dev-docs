const factorielle = (n) => {
    if( n < 2 ) {
        return n
    } else {
        let result = n * factorielle(n-1)
        return result
    }
}

console.log(factorielle(5))