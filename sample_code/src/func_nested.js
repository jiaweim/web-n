function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

fn_inside = outside(3);

console.log(fn_inside(5)); // 8
console.log(outside(3)(5)); // 8