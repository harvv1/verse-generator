import { verses } from './verses.ts';

console.clear();

const generate = () => {
	const values = Object.values(verses);
	const randomValue = values[Math.floor(Math.random() * values.length)];
	return randomValue;
};

console.log(generate());
