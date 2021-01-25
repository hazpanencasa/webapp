import {Component, Input, OnInit} from "@angular/core";
import {Formula} from "@core/model/formulas.model";

@Component({
  selector: "app-roulette-steps",
  templateUrl: "./roulette-steps.component.html",
  styleUrls: ["./roulette-steps.component.sass"],
})
export class RouletteStepsComponent implements OnInit {
  @Input() formula: Formula;
  autoTicks = false;
  max = 12;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  tickInterval = 1;
  images = [];
  arraySteps = [];
  Object: object = {};

  getSliderTickInterval(): number | "auto" {
    if (this.showTicks) {
      return this.autoTicks ? "auto" : this.tickInterval;
    }
    return 0;
  }
  constructor() {}

  ngOnInit() {
    this.rouletteImage();
    this.loopInfo();
  }
  handleInputSlider(event: Event) {
    this.loadImage(event);
    this.loadInfo(event);
  }
  rouletteImage() {
    for (let i = 1; i <= this.formula.steps.length; i++) {
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
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(this.images[index], 0, 0, canvas.width, canvas.height);
  }
  loopInfo() {
    const stepsArray = this.formula.steps;
    for (let i = 0; i < stepsArray.length; i++) {
      this.arraySteps.push(stepsArray[i]);
    }
  }
  loadInfo(index) {
    this.arraySteps[index - 1];
  }
  celsiusToFahrenheit(celsius: number) {
    return Math.ceil((celsius * 9) / 5 + 32);
  }
}
