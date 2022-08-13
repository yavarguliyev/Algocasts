import pyramid from './index';

const consoleLog = jest.spyOn(global.console, 'log').mockImplementation();

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  consoleLog.mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  pyramid(2);
  expect(consoleLog.mock.calls[0][0]).toEqual(' # ');
  expect(consoleLog.mock.calls[1][0]).toEqual('###');
  expect(consoleLog.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
  pyramid(3);
  expect(consoleLog.mock.calls[0][0]).toEqual('  #  ');
  expect(consoleLog.mock.calls[1][0]).toEqual(' ### ');
  expect(consoleLog.mock.calls[2][0]).toEqual('#####');
  expect(consoleLog.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
  pyramid(4);
  expect(consoleLog.mock.calls[0][0]).toEqual('   #   ');
  expect(consoleLog.mock.calls[1][0]).toEqual('  ###  ');
  expect(consoleLog.mock.calls[2][0]).toEqual(' ##### ');
  expect(consoleLog.mock.calls[3][0]).toEqual('#######');
  expect(consoleLog.mock.calls.length).toEqual(4);
});
