
function classDecorator<T extends { new (...args:any[]): {}}>(
	contructor: T
) {
	return class extends contructor{
		newProperty = "New Property";
		hello = 'override';
	}
}

@classDecorator
export class SuperClass {

	public myProperty: string = 'Abc123'

	print(){
		console.log('Hola mundo');
	}
}

console.log( SuperClass );
const superClass = new SuperClass()
console.log( superClass );
