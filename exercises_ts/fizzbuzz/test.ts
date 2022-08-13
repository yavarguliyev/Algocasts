import fizzBuzz from './index';

const consoleLog = jest.spyOn(global.console, 'log').mockImplementation();

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  fizzBuzz(5);

  expect(consoleLog.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);

  expect(consoleLog.mock.calls[0][0]).toEqual(1);
  expect(consoleLog.mock.calls[1][0]).toEqual(2);
  expect(consoleLog.mock.calls[2][0]).toEqual('fizz');
  expect(consoleLog.mock.calls[3][0]).toEqual(4);
  expect(consoleLog.mock.calls[4][0]).toEqual('buzz');
  expect(consoleLog.mock.calls[5][0]).toEqual('fizz');
  expect(consoleLog.mock.calls[6][0]).toEqual(7);
  expect(consoleLog.mock.calls[7][0]).toEqual(8);
  expect(consoleLog.mock.calls[8][0]).toEqual('fizz');
  expect(consoleLog.mock.calls[9][0]).toEqual('buzz');
  expect(consoleLog.mock.calls[10][0]).toEqual(11);
  expect(consoleLog.mock.calls[11][0]).toEqual('fizz');
  expect(consoleLog.mock.calls[12][0]).toEqual(13);
  expect(consoleLog.mock.calls[13][0]).toEqual(14);
  expect(consoleLog.mock.calls[14][0]).toEqual('fizzbuzz');
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  // console.log.mockRestore();
});
