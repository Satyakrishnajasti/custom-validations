import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Space, whiteSpace } from 'src/shared/whitespace-validator';


@Component({
  selector: 'app-whitespace',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './whitespace.component.html',
  styleUrls: ['./whitespace.component.sass']
})
export class WhitespaceComponent {
  protected form = new FormGroup<any>(
    {
      name: new FormControl('', [Validators.required, whiteSpace()]),
    }
  );
}
