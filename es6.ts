/** ES6 JAVASCRIPT Petko */

let getRandomNumber = () => {
	return (Math.random() * 9).toFixed(0);
};

let uporediDvaRandomBroja = (prvi, drugi) => {
	return prvi > drugi ? prvi : drugi;
};

let generisiBrojAsync = () => {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(getRandomNumber()),
			parseInt(getRandomNumber()) * 1000
		);
	});
};

// Paralelni promisi
// console.log(`Paralelni promisi poceli sa radom`);
// generisiBrojAsync().then(num1 => {
// 	console.log(`Prvi broj je: ${num1}`);
// 	generisiBrojAsync().then(num2 => {
// 		console.log(`Drugi broj je: ${num2}`);
// 		console.log(`Veci je ${uporediDvaRandomBroja(num1, num2)}`);
// 	});
// });

// Ceka da se svi promisi izvrse
// console.log(`Obradjujem...`);
// Promise.all([generisiBrojAsync(), generisiBrojAsync()]).then(numbers => {
// 	console.log(`Prvi broj: ${numbers[0]}`);
// 	console.log(`Drugi broj: ${numbers[1]}`);
// 	console.log(`Veci je ---> ${uporediDvaRandomBroja(numbers[0], numbers[1])}`);
// });

/** TYPESCRIPT pandan Research */

let getRandomNum = (): number => {
	return Math.random() * 9;
};

let compareTwoRandomNumbers = (num1: number, num2: number): number => {
	return num1 > num2 ? num1 : num2;
};

let genNumberAsync = (): Promise<number> => {
	return new Promise<number>((resolve, reject) => {
		setTimeout(
			() => resolve(getRandomNum()),
			parseInt(getRandomNumber()) * 1000
		);
	});
};

// paralelni promisi
// console.log(`Paralelni promisi poceli sa radom`);
// genNumberAsync().then((num1): void => {
// 	console.log(`Prvi broj je: ${num1}`);
// 	genNumberAsync().then((num2): void => {
// 		console.log(`Drugi broj je: ${num2}`);
// 		console.log(`Veci je: ${compareTwoRandomNumbers(num1, num2)}`);
// 	});
// });

// Ceka da se svi promisi izvrse
// console.log(`Obradjujem...`);
// Promise.all([genNumberAsync(), genNumberAsync()]).then((numbers): void => {
// 	console.log(`Prvi broj: ${numbers[0]}`);
// 	console.log(`Drugi broj: ${numbers[1]}`);
// 	console.log(
// 		`Veci je ---> ${compareTwoRandomNumbers(numbers[0], numbers[1])}`
// 	);
// });

/**  Async/await  */
const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
const startAsync = async () => {
	console.info(`First`);
	await wait(1000);
	console.info(`Second`);
	await wait(2000);
	console.info(`Third`);
	await wait(3000);
	console.info(`Fourth`);
};

//startAsync();

/** Asynchronous Iteration using for-await-of */
function* numbers() {
	yield* [22, 33];
	let index = 1;
	while (true) {
		yield index;
		index = index + 1;
		if (index > 10) {
			break;
		}
	}
}

function gilad() {
	for (const num of numbers()) {
		console.log(num);
	}
}
//gilad();

/** Map, filter, reduce */
const typescriptArrays = `https://www.tutorialspoint.com/typescript/typescript_arrays.htm`;

const officers: any[] = new Array(
	{ id: 20, name: `Captain Piett` },
	{ id: 24, name: `General Veers` },
	{ id: 56, name: `Admiral Ozzel` },
	{ id: 88, name: `Commander Jerjerrod` }
);

console.log(officers.map(officer => officer.id));
console.log(officers.reduce((acc, officer) => acc + officer.id, 0));
console.log(officers.filter(officer => officer.id > 25));
