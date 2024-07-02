class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;

		this.length++;

		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		console.log(array);
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		if (index === 0) {
			this.prepend(value);
			return this.printList();
		}

		const newNode = new Node(value);
		const lader = this.getIndex(index - 1);

		const holdingPointer = lader.next;

		lader.next = newNode;
		newNode.next = holdingPointer;

		this.length++;
		return this.printList();
	}

	getIndex(index) {
		let counter = 0;
		let currentNode = this.head;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		const leader = this.getIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
}

const myLinkedList = new LinkedList(10);
