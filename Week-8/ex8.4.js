function isValid(s) {
    let stack = [];
    for (let character of s) {
        switch (character) {
            case ')': if (stack.pop() != '(') return false;
                break;
            case '}': if (stack.pop() != '{') return false;
                break;
            case ']': if (stack.pop() != '[') return false;
                break;
            default: stack.push(character);
        }
    }
    return stack.length === 0 ? true : false;
};