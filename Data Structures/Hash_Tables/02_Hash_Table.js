class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);

		return this.data;
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];

		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}

		return undefined;
	}

	keys() {
		if (!this.data.length) {
			return undefined;
		}

		let res = [];

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i] && this.data[i].length) {
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						res.push(this.data[i][j][0]);
					}
				} else {
					res.push(this.data[i][0]);
				}
			}
		}
		return res;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('bananas', 1000);
myHashTable.set('apples', '1000');
// myHashTable.get('bananas');

console.log(myHashTable.get('apples'));

console.log(myHashTable);

console.log(myHashTable.keys());
