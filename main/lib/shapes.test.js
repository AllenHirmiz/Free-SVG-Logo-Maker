const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
  test("Triangle test using white background colour", () => {
    const shape = new Triangle();
    shape.setColor("white");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="white" />'
    );
  });
});

describe("Triangle test", () => {
  test("Triangle test using unknown colour name background notoffwhite", () => {
    const shape = new Triangle();
    shape.setColor("not off white");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="white" />'
    );
  });
});


describe("Square test", () => {
  test("Square test using black background", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="black" />'
    );
  });
});

describe("Square test", () => {
  test("Square test using Rde background that is misspelled", () => {
    const shape = new Square();
    shape.setColor("Rde");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="Red" />'
    );
  });
});


describe("Circle test", () => {
  test("Circle test using the hex colour code #a1b3a8 as a background colour", () => {
    const shape = new Circle();
    shape.setColor("#a1b3a8");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#a1b3a8" />'
    );
  });
});

describe("Circle test", () => {
  test("Circle test using the hex colour code #a1b.3a8 as a background colour that is not valid code", () => {
    const shape = new Circle();
    shape.setColor("#a1b.3a8");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#a1b3a8" />'
    );
  });
});