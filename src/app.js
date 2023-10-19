// const command = process.argv[2];
// const num1 = +process.argv[3];
// const num2 = +process.argv[4];

// function calculator() {
// 	if (command === 'help') {
// 		console.log('Available commands: add, substract, multiply, divide.');
// 	}
// 	if (command === 'add') {
// 		console.log(num1 + num2);
// 	}
// 	if (command === 'substract') {
// 		console.log(num1 - num2);
// 	}
// 	if (command === 'multiply') {
// 		console.log(num1 * num2);
// 	}
// 	if (command === 'divide') {
// 		console.log(num1 / num2);
// 	}
// 	if (command !== 'help' && command !== 'add' && command !== 'substract' && command !== 'divide' && command !== 'multiply') {
// 		console.log('This command is not a calculator command. See help for available options.');
// 	}
// }

// calculator();

// _______________;

const calculator = {
	help() {
		return `Available commands: ${Object.keys(this).join('. ')}`;
	},

	add(num1, num2) {
		return num1 + num2;
	},

	substract(num1, num2) {
		return num1 - num2;
	},

	multiply(num1, num2) {
		return num1 * num2;
	},

	divide(num1, num2) {
		return num1 / num2;
	},
};

function calculate(command, num1, num2) {
	try {
		return calculator[command](num1, num2);
	} catch (err) {
		return 'This command is not a calculator command. See help for available options.';
	}
}

const command = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];

const calculateResult = calculate(command, num1, num2);
console.log(calculateResult);
