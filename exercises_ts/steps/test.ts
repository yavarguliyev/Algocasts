import steps from './index';

const consoleLog = jest.spyOn(global.console, 'log').mockImplementation();

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  consoleLog.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(consoleLog.mock.calls[0][0]).toEqual('#');
  expect(consoleLog.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(consoleLog.mock.calls[0][0]).toEqual('# ');
  expect(consoleLog.mock.calls[1][0]).toEqual('##');
  expect(consoleLog.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(consoleLog.mock.calls[0][0]).toEqual('#  ');
  expect(consoleLog.mock.calls[1][0]).toEqual('## ');
  expect(consoleLog.mock.calls[2][0]).toEqual('###');
  expect(consoleLog.mock.calls.length).toEqual(3);
});
