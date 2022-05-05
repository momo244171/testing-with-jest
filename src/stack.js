var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    //return stack[0]; // Det här är medvetet felaktigt
    return _.last(stack);
}

//returns true or false based if the stack has any element 
exports.isEmpty = function () {

    //Should return false because two elements are added
    stack.push('motaz')
    stack.push(12)

    if (stack.length === 0)
        return true
    
    return false
}
