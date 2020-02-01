// 1. Copy and paste your prototype in here and refactor into class syntax.

  class CuboidMaker {
      constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
      }
      volume(){
        return this.length * this.width * this.height;
      };
      surfaceArea() {
          return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      };
  }

  class Cuboid extends CuboidMaker {
      constructor(length, width, height) {
          super(length, width, height);
      }
  }

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);
    }
    volume(){
        return (this.length * this.width * this.height) ^ 3;
    }
    surfaceArea() {
        return 6 * (this.length * this.width * this.height) ^ 2;
    }
}

  const cuboid = new Cuboid(this.length = 4, this.width = 5, this.height = 5);
  const cubes = new CubeMaker(this.length = 5, this.width = 5, this.height = 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cubes.volume()); // 126
console.log(cubes.surfaceArea()); // 748

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.