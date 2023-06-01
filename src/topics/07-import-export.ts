import { Product, taxCalculation } from './06-function-destructuring';

const shopingCart: Product[] = [
	{
		description: 'Nokia',
		price: 100
	},
	{
		description: 'iPad',
		price: 150
	}
]

const [total, taxes] = taxCalculation({
	products: shopingCart,
	tax: 0.15
})

console.log('Total: ', total );
console.log('Taxes: ', taxes );

