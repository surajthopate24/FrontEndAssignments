class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.width * this.height;
    }
}

  const obj = new Rectangle(7, 5);
  document.write("The Area Of The Rectangle : " +obj.area()); // 35

