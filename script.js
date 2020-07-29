function sort() {
    var toSort = document.getElementById('left-section').children;
    toSort = Array.prototype.slice.call(toSort, 0);

    toSort.sort(function (a, b) {
        var aord = +a.id.split('-')[1];
        var bord = +b.id.split('-')[1];
        // two elements never have the same ID hence this is sufficient:
        return (aord > bord) ? 1 : -1;
    });

    var parent = document.getElementById('left-section');
    parent.innerHTML = "";

    for (var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
}

function suffle() {
    var parent = document.getElementById("left-section");
    var frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}