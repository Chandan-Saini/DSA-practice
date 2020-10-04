var containsDuplicate = function(A) {
    const S = new Set();
    for (let a of A) {
        if (S.has(a)) return true;
        S.add(a);
    }
    return false;
};