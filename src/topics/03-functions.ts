function addNumbers( a: number, b: number ): number {
	return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
	return (a+b).toString()
}

function multiply( fistNumber: number, secondNumber?: number, base: number = 2){
	return fistNumber * base
}

// const result = addNumbers(1, 2)
// const resultString = addNumbersArrow(1,2)
// const multiplyResult = multiply(1)

// console.log({ result, resultString, multiplyResult });

interface Character {
	name: string
	hp: number
	showHp: () => void
}

const healCharacter = ( character: Character, amount: number ) => {
	character.hp += amount;
}

const strider: Character = {
	name: 'Strider',
	hp: 50,
	showHp() {
		console.log(`Puntos de vida ${ this.hp }`);
	}
}

healCharacter( strider, 10 )
healCharacter( strider, 10 )

strider.showHp();

export {}