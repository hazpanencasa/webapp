import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes,
  query,
} from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(1200)]),
]);

// export let fadeRightToLeft = trigger('fadeRightToLeft', [
//   state('void', style({ transform: "translateX(200px)"})),
//   transition(':enter, :leave', [animate(1200)]),
// ]);

export let fade = trigger('fadeIn', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 })),
    query(':enter', animate('1s ease-in', style({ opacity: 1 }))),
  ]),
]);

export let fadeUp = trigger('fadeUp', [
  transition('* => *', [
    query('form', style({ opacity: 0 }), { optional: true }),
    query(
      'form',
      animate(
        '1s ease-in',
        keyframes([
          style({ opacity: 1, transform: 'translateY(-75px)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
        ])
      )
    ),
  ]),
]);
