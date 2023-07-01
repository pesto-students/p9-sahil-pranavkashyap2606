var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};

var validate = function (node, lower, upper) {
  if (node == null) {
    // empty node or empty tree
    return true;
  }

  if (lower < node.val && node.val < upper) {
    // check if all tree nodes follow BST rule
    return (
      validate(node.left, lower, node.val) &&
      validate(node.right, node.val, upper)
    );
  } else {
    // early reject when we find violation
    return false;
  }
};

console.log("isValidBST({val:1}): ", isValidBST({ val: 1 }));
