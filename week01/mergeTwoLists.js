/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1 || !l2) return l1 ? l1 : l2;

    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([1]))