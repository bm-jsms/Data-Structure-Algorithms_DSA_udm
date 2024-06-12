const nemo = ['nemo'];
const everyOne = [
	'dory',
	'bruce',
	'marlin',
	'nemo',
	'gill',
	'bloat',
	'nigel',
	'squirt',
	'darla',
	'hank',
];

const large = new Array(100000).fill(0).map((_, i) => i + 1);
large[1455] = 'nemo';

function findNemo(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log('running');
		if (arr[i] === 'nemo') {
			console.log('Found Nemo!');
			break;
		}
	}
}

findNemo(nemo);
findNemo(everyOne);
findNemo(large);
