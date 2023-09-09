const PascalTriangle = require("./index");

test("PascalTriangle is a class", () => {
  expect(typeof PascalTriangle.prototype.constructor).toEqual("function");
});

test("calculates correct factoriel value for 1", () => {
  const { factoriel } = new PascalTriangle();
  expect(factoriel(1)).toEqual(1);
});

test("calculates correct factoriel value for 2", () => {
  const { factoriel } = new PascalTriangle();
  expect(factoriel(2)).toEqual(2);
});

test("calculates correct factoriel value for 3", () => {
  const { factoriel } = new PascalTriangle();
  expect(factoriel(3)).toEqual(6);
});

test("calculates correct factoriel value for 4", () => {
  const { factoriel } = new PascalTriangle();
  expect(factoriel(4)).toEqual(24);
});

test("calculates correct factoriel value for 5", () => {
  const { factoriel } = new PascalTriangle();
  expect(factoriel(5)).toEqual(120);
});

test("returns correct fill array for 1", () => {
  const pascalTriangle = new PascalTriangle(1);
  expect(pascalTriangle.fill().length).toEqual(1);
  expect(pascalTriangle.fill()[0]).toEqual([1]);
});

test("returns correct fill array for 2", () => {
  const pascalTriangle = new PascalTriangle(2);
  expect(pascalTriangle.fill().length).toEqual(2);
  expect(pascalTriangle.fill()[0]).toEqual([1]);
  expect(pascalTriangle.fill()[1]).toEqual([1, 1]);
});

test("returns correct fill array for 3", () => {
  const pascalTriangle = new PascalTriangle(3);
  expect(pascalTriangle.fill().length).toEqual(3);
  expect(pascalTriangle.fill()[0]).toEqual([1]);
  expect(pascalTriangle.fill()[1]).toEqual([1, 1]);
  expect(pascalTriangle.fill()[2]).toEqual([1, 2, 1]);
});

test("returns correct fill array for 4", () => {
  const pascalTriangle = new PascalTriangle(4);
  expect(pascalTriangle.fill().length).toEqual(4);
  expect(pascalTriangle.fill()[0]).toEqual([1]);
  expect(pascalTriangle.fill()[1]).toEqual([1, 1]);
  expect(pascalTriangle.fill()[2]).toEqual([1, 2, 1]);
  expect(pascalTriangle.fill()[3]).toEqual([1, 3, 3, 1]);
});

test("returns correct fill array for 5", () => {
  const pascalTriangle = new PascalTriangle(5);
  expect(pascalTriangle.fill().length).toEqual(5);
  expect(pascalTriangle.fill()[0]).toEqual([1]);
  expect(pascalTriangle.fill()[1]).toEqual([1, 1]);
  expect(pascalTriangle.fill()[2]).toEqual([1, 2, 1]);
  expect(pascalTriangle.fill()[3]).toEqual([1, 3, 3, 1]);
  expect(pascalTriangle.fill()[4]).toEqual([1, 4, 6, 4, 1]);
});
