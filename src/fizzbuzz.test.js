const fizzBuzz = require('./fizzbuzz')

let outputData = ''
const storeLog = (inputs) => (outputData += inputs)

test('Input n = 3, expect "fizz" instead of 3', () => {
	outputData = ''
	console["log"] = jest.fn(storeLog)
	fizzBuzz(3)
	expect(outputData).toBe('12fizz')
})

test('Input n = 5, expect "buzz" instead of 5', () => {
	outputData = ''
	console["log"] = jest.fn(storeLog)
	fizzBuzz(5)
	expect(outputData).toBe('12fizz4buzz')
})

test('Input n = 15, expected "fizzbuzz" instead of 15', () => {
	outputData = ''
	console["log"] = jest.fn(storeLog)
	fizzBuzz(15)
	expect(outputData).toBe('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz')
})