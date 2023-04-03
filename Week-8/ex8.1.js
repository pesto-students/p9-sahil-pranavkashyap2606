var reverseList = function(head) {
    if(!head ) return null;
     let temp = {val: head.val, next: null};
     head = head.next;
    while(head != null){
        temp = {val: head?.val, next: temp};
       head =  head?.next;

    }
 return temp;
};