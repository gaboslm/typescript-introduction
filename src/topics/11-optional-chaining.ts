export interface Passenger {
	name: string
	children?: string[]
}

const passenger1: Passenger = {
	name: 'Fernando'
}

const passenger2: Passenger = {
	name: 'Melissa',
	children: ['Natalia','Elizabeth']
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

	const howManychildren = passenger.children?.length || 0;
	// const howManychildren = passenger.children!.length;
	
	console.log( passenger.name, howManychildren );

	return howManychildren;
		
}

returnChildrenNumber( passenger1 )