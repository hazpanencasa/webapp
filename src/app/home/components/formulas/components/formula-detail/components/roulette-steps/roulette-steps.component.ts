import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-roulette-steps",
  templateUrl: "./roulette-steps.component.html",
  styleUrls: ["./roulette-steps.component.sass"],
})
export class RouletteStepsComponent implements OnInit {
  autoTicks = false;
  max = 12;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  tickInterval = 1;
  images = [];

  getSliderTickInterval(): number | "auto" {
    if (this.showTicks) {
      return this.autoTicks ? "auto" : this.tickInterval;
    }
    return 0;
  }
  constructor() {}

  ngOnInit() {
    this.rouletteImage();
  }
  handleInputSlider(event: Event) {
    this.loadImage(event);
  }
  rouletteImage() {
    // const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");
    for (let i = 1; i <= 12; i++) {
      const number = i.toString().padStart(2, "00");
      const roulette = `assets/images/Pasos/Pasos_PNG/Pasos_hazpanencasa-${number}.png`;
      const image = new Image();
      image.src = roulette;
      image.addEventListener("load", () => {
        this.images[i] = image;
        if (i === 1) {
          this.loadImage(i);
        }
      });
    }
  }
  loadImage(index) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(this.images[index], 0, 0, canvas.width, canvas.height);
  }
}
