class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get area() {
      return this.height * this.width;
    }
  }
  
  const obj = new Rectangle(5, 7);
  document.write("Area Of The Rectangle Using Getters and Setters :"+obj.area); // 35