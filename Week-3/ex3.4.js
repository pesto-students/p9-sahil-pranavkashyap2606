function createStack() {
    let items = [];
  
    return {
      push(element) {
        items.push(element);
      },
      pop() {
        return items.pop();
      },
      peek() {
        return items[items.length - 1];
      },
      isEmpty() {
        return items.length === 0;
      },
      clear() {
        items = [];
      },
      size() {
        return items.length;
      },
      print() {
        console.log(items.toString());
      }
    };
  }
  
  const stack = createStack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.size()); // 3
  console.log(stack.peek()); // 3
  console.log(stack.pop()); // 3
  console.log(stack.peek()); // 2
  stack.print(); // 1, 2
  stack.clear();
  console.log(stack.isEmpty()); // true
  