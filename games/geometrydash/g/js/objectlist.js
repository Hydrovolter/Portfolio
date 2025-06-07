let objectList = [];
let fallback;
fetch(`js/objects.json`)
    .then((res) => res.json())
    .then((data) => objectList = data)
    .then(() => fallback = objectList[0])