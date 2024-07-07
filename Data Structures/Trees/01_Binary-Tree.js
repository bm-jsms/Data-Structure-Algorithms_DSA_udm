class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return false;
		}

		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;

		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}
				} else if (currentNode.right.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						currentNode.right.left = currentNode.left;

						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}
				} else {
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}
				}

				return true;
			}
		}
	}
}

const tree = new BinarySearchTree();
