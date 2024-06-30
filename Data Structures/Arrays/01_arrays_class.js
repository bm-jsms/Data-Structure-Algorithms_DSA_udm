// const array = []; => most common way

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(index) {
		this.data[this.length] = index;
		this.length++;

		return this.length;
	}

	pop() {
		const lastItems = this.data[this.length - 1];
		delete this.data[this.length - 1];

		this.length--;

		return lastItems;
	}

	delete(index) {
		const item = this.data[index];

		this.shiftItems(index);

		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1];
		this.length--;
	}
}

const myArray = new MyArray();

console.log(myArray);

myArray.push('Hello');
myArray.push('World');
myArray.push('German');

myArray.push('France');

console.log(myArray);

myArray.pop(); // France

console.log(myArray);
console.log(myArray.get(2)); // German
