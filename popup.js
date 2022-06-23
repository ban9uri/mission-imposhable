class Popup {
  constructor(x, y) {
    this.xpos1 = x;
    this.ypos1 = y;
    this.ypos2 = y + 45/200*k;
    this.width1 = 345/200*k;
    this.height1 = 157/200*k;
    this.width2 = 62/200*k;
    this.height2 = 28/200*k;
  }

  pDisplay() {
    imageMode(CENTER);
    image(mission2_popup, this.xpos1, this.ypos1, this.width1, this.height1);
    imageMode(CORNER);
  }

  check1() {
    if (
      this.xpos1 - this.width2 / 2 < mouseX &&
      mouseX < this.xpos1 + this.width2 / 2 &&
      this.ypos2 - this.height2 / 2 < mouseY &&
      mouseY < this.ypos2 + this.height2 / 2
    ) {
      return true;
    }
  }

  check2() {
    if (
      this.xpos1 - this.width1 / 2 < mouseX &&
      mouseX < this.xpos1 + this.width1 / 2 &&
      this.ypos1 - this.height1 / 2 < mouseY &&
      mouseY < this.ypos1 + this.height1 / 2
    ) {
      return true;
    }
  }
}
