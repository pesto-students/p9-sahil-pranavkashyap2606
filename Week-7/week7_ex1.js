arr = [-5,-19];

function max_sum(a) {
  if (a.length == 0) {return 'Please provide an array with numbers'}
  else if (a.length == 1) {return a[0]}
  
  let curr_sum = 0;
  let if_neg_arr = a[0];
  let max = -Infinity;

  for (let i = 0; i<=a.length; i++) {
    curr_sum = curr_sum + a[i];
    if (a[i] >= 0) {
      
      if (curr_sum > max) {
        max = curr_sum;
      }
    }

    else {
      
      if ((curr_sum < 0) && (i != a.length)) {
        if (curr_sum > if_neg_arr) {
          if_neg_arr = curr_sum;
        }
        curr_sum = 0;
      }
    }
  }
  if (max == -Infinity) {
    max = if_neg_arr;
  }
  return max;
}

console.log(max_sum(arr))