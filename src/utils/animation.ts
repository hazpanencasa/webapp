import {animate, state, style, transition, trigger} from "@angular/animations";

export let slider = trigger("slider", [
  state("void", style({transform: "translateX(0px)"})),
  transition(
    ":enter",
    animate(170000, style({transform: "translateX(-7650px)"}))
  ),
]);
