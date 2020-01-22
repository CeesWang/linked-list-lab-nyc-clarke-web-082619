import { link } from "fs";

function getName(node ){
    return node.name;
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next (head, collection) {
    return collection[head.next];
}

function nodeAt(index, linkedList, collection) {
    if (index === 0) {
        return headNode(linkedList,collection);
    }
    let current = headNode(linkedList,collection);
    for (let i = 0; i < index; ++i) {
        current = next(current,collection);
    }
    return current;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList;
    }
    let current = linkedList;
    for (let i = 0; i < index; ++i) {
        current = collection[current];
    }
    return current.next;
}

function indexAt(node, collection, linkedList) {
    let head = headNode(linkedList,collection); 
    let index = 0;
    while (head !== node) {
        head = next(head,collection);
        index++;
    }
    return index;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection);
    collection[newNodeAddress].next = previousNode.next;
    previousNode.next = newNodeAddress;
}
  
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode;
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next;
  }