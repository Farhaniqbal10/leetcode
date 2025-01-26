
var isValid = function(s) {
    const kurungan = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    const tumpuk = []

    for(const char of s) {
        if(char in kurungan){
            const topElement = tumpuk.pop() || '#';
            if(kurungan[char] !== topElement){
                return false;
            }
        }else {
            tumpuk.push(char);
        }
    }
    return tumpuk.length === 0;
};
