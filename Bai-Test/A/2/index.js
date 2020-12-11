function merge2String(s1, s2) {
    y = Math.min(s1.length, s2.length);
    x = "";
    for (let i = 0; i < y; i++) {
        x += s1[i] + s2[i];
    }
    if (s1.length > s2.length) {
        x += s1.substring(y);
    }
    else if (s1.length < s2.length) {
        x += s2.substring(y);
    }
    return x;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));