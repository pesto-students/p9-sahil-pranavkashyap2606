arr = [1,2,4,6,3,1,4,7,23];
sum = 7;


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

Array.prototype.binarySearch = function(v) {
    var i, mid,
        start = 0,
        end = this.length-1;
    
    while(true) {
        if (start >= end - 1) {
            if (Math.abs(this[start] - v) <= Math.abs(this[end] - v)) {return this[start]} 
            else {return this[end]}
        }
        mid = Math.floor((start + end)/2)
        if (this[mid] > v) {end = mid}
        else if (this[mid] < v) {start = mid}

        if (this[mid] === v) {return this[mid]}
        

    }
}

function close_3sum(a, req_sum) {
    heapSort(a, a.length);
    let sum = a[0] + a[1] + a[2];
    let closest_sum = Infinity
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            let find_val = req_sum - a[i] - a[j];
            let nearest_num = a.slice(j+1,a.length).binarySearch(find_val);
            let iter_sum = a[i] + a[j] + nearest_num;
            if (Math.abs(closest_sum - req_sum) > Math.abs(iter_sum - req_sum)) {closest_sum = iter_sum}
        }
    }
    return closest_sum  
}

// Order of O(n^2.log(n)) + O(n.log(n))
console.log('close_3sum(arr,sum): ', close_3sum(arr,sum));
