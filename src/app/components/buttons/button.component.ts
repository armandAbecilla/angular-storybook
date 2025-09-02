import { Component, input } from '@angular/core';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'danger'
  | '';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  btnVariant = input<ButtonVariant>();
  btnText = input.required();
}
