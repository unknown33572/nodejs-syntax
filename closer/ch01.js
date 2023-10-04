function grandParent(g1, g2) {
    var g3 = 5;
    return function parent(p1, p2) {
        var p3 = 55;
        return function child(c1, c2) {
            var c3 = 555;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}

var parentFunction = grandParent(1, 2); // parentFunction = parent()
var childFunction = parentFunction(11, 22); // childFunction = child()
console.log(childFunction(111, 222));