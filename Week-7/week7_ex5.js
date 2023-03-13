a = [-11,2,0,-7,1,10,23];
b = 14;


Array.prototype.binarySearch = function(v) {

    /* ARRAY MUST BE SORTED */

    if ( !this.length ) { return false; }
    if ( this[0] === v ) { return true; }

    var i, mid,
        start = 0,
        end = this.length,
        c = false;

    while ( c = (i = this[mid = start+((end-start)>>1)]) !== v ) {

        i < v ? (start = mid) : (end = mid);

        if (start >= end - 1) { break; }

    }

    return !c;

};

const maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    
    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }
    
     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }
    
     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 
    
        // Recursively heapify the affected sub-tree 
        maxHeapify(arr, n, largest); 
      } 
  }
  
// main function to do heap sort 
const heapSort = (arr, n) => { 
    // Build heap (rearrange array) 
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, n, i); 
    }

    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) { 
        // Move current root to end 
        let temp = arr[0]; 
        arr[0] = arr[i]; 
        arr[i] = temp; 

        // call max heapify on the reduced heap 
        maxHeapify(arr, i, 0); 
    } 
}


function find_pair(para, diff) {
    // sort the array in O(n.log(n))
    heapSort(para, para.length);

    // add b to each abs(element) and find the resulting value in the array using binary search

    for (let i = 0; i < para.length; i++) {
        find_val = b + Math.abs(para[i]);
        if ((para.binarySearch(find_val)) || (para.binarySearch(-find_val))) {return 1}
    }
    return 0

}

console.log(find_pair(a,b));