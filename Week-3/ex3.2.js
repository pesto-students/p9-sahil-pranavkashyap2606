// Function 1: Using call
function myName(location,program) {
  return 'Hi my name is '+this.firstName + ' ' + this.lastName+'. I currently live in ' + location +'. And I am learning ' + program;
}

const introUsingCall = myName.call({firstName: 'Pranav',lastName: 'Kashyap'}, 'Bangalore','JS');
console.log(introUsingCall); // Hi my name is Pranav Kashyap. I currently live in Bangalore. And I am learning JS

const introUsingBind = myName.bind({firstName: 'Pranav',lastName: 'Kashyap'}, 'Karnataka');
const result2 = introUsingBind('JS');
console.log(result2); // Hi my name is Pranav Kashyap. I currently live in Karnataka. And I am learning JS

const result3 = myName.apply({firstName: 'Pranav',lastName: 'Kashyap'}, ['India', 'JS']);
console.log(result3); // Hi my name is Pranav Kashyap. I currently live in India. And I am learning JS
