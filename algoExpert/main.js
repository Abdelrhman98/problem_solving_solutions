class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var x = {
    "head": "2",
    "nodes": [
        {"id": "2", "next": "4", "value": 2},
        {"id": "4", "next": "7", "value": 4},
        {"id": "7", "next": "1", "value": 7},
        {"id": "1", "next": null, "value": 1}
    ]
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    
    return getSumOfLinkedList(linkedListOne);
}

function getSumOfLinkedList( linkedListOne ){
    var head = linkedListOne.head,
    list=[]

    while(linkedListOne.nodes[head]?.next)
    {
        list.push(head)
        head = linkedListOne.nodes[head].next
    }
    return list
}






console.log(sumOfLinkedLists(x,x))

//   console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
// 1 1 3  5   7   22
// 1 2 5 10  17   






