function instance_of(L, R) {
    L = L.__proto__
    while (true) {
        if (L === null) return false
        if (L === R.prototype) return true
        L = L.__proto__
    }
}
console.log([].__proto__);
console.log({}.__proto__);
console.log(instance_of([], Array)); // true
console.log(instance_of({}, Object)); // true
