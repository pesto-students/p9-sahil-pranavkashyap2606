rotateRight = function (head, k, length) {

    k = k % length;

    let ptr = head;

    for (let i = 1; i < length; i++) {
        ptr = ptr.next
    }
    ptr.next = head;
    for (let i = 1; i <= k; i++) {
        ptr = ptr.next
        if (i == k) {
            head = ptr.next;
            ptr.next = null;
        }
    }
    return head;

};

console.log(JSON.stringify(rotateRight({ val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } }, 2, 4)));