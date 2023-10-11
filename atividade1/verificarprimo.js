let num = 3;

if (checarPrimo(num)) {
    console.log("é primo");
} else {
    console.log("não é primo");
}

function checarPrimo(n) {
    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}