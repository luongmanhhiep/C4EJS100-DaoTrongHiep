function merge2String(s1, s2) {
    s = '';
    for (i = 0; i < s1.length; i++) {
        if (i < s2.length) {
            s += s1.charAt([i]) + s2.charAt([i]);
            if ((i == s1.length - 1) && (s1.length < s2.length)) {
                s += s2.substring(i + 1);
            }
        } else {
            s += s1.charAt([i]);
        }
    }
    return s;
}
console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));