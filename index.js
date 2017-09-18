function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
    return getFirstSelector("#nested .target");
}

function deepestChild() {
   let currentNode = document.querySelector("#grand-node");
   let nextNode = currentNode.children[0];
   while(nextNode) {
     currentNode = nextNode;
     nextNode = currentNode.children[0]; 
   }
   return currentNode
}

function increaseRankBy(n) {
 let ielem = document.querySelectorAll('.ranked-list li');
 for (let i = 0; i < ielem.length; i++) {
    ielem[i].innerHTML = parseInt(ielem[i].innerHTML) + n;
 }
}
