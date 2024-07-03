class Stack {
	constructor() {
		this.array = [];
	}

	peek() {
		if (this.array.length === 0) {
			return null;
		}

		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);

		return this;
	}

	pop() {
		const delItem = this.array[0];
		this.array.pop();

		return delItem;
	}
}

const myStack = new Stack();

myStack.push('val1');
myStack.push('val2');
myStack.push('val3');
myStack.push('val4');

console.log(myStack);
console.log(myStack.peek());

myStack.pop();
myStack.pop();

console.log(myStack);
console.log(myStack.peek());
