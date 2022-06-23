class Word {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  texts(segment) {
    text(segment, this.x, this.y);
  }
}