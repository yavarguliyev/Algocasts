// --- Description
// Create a pascal triangle data structure.  The pascal triangle
// should be a class with methods 'factoriel' and 'fill'.
// --- Examples
//     const pascalTriangle = new PascalTriangle(n);

//     pascalTriangle.factoriel(1) => 1
//     pascalTriangle.factoriel(2) => 2
//     pascalTriangle.factoriel(3) => 6
//     pascalTriangle.factoriel(4) => 24
//     pascalTriangle.factoriel(5) => 120
//     pascalTriangle.factoriel(6) => 720
//     pascalTriangle.factoriel(7) => 5040
//     pascalTriangle.factoriel(8) => 40320
//     pascalTriangle.factoriel(9) => 362880
//     pascalTriangle.factoriel(10) => 3628800
//
//     if (n === 1)
//     pascalTriangle.fill() => [ [ 1 ] ]
//     if (n === 2)
//     pascalTriangle.fill() => [ [ 1 ], [ 1, 1 ] ]
//     if (n === 3)
//     pascalTriangle.fill() => [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]
//     if (n === 4)
//     pascalTriangle.fill() => [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ] ]
//     if (n === 5)
//     pascalTriangle.fill() => [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]

class PascalTriangle {
  constructor(n) {
    this.n = n;
  }

  factoriel(m) {
    let result = 1;
    if (m === 0) {
      return 1;
    }

    while (m > 0) {
      result *= m;
      m--;
    }

    return result;
  }

  fill() {
    let arr = [];
    for (let i = 0; i < this.n; i++) {
      arr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= i; j++) {
        arr[i].push(
          this.factoriel(i) / (this.factoriel(j) * this.factoriel(i - j)),
        );
      }
    }

    return arr;
  }
}

module.exports = PascalTriangle;
