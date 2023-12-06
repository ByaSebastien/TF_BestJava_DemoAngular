import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-demo07-formulaires',
  templateUrl: './demo07-formulaires.component.html',
  styleUrls: ['./demo07-formulaires.component.scss']
})
export class Demo07FormulairesComponent {

  fg!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder
  ) {
    this.fg = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(10)]],
      origin: [null, [Validators.required, Validators.minLength(2)]],
      note: [null, [Validators.min(0), Validators.max(5)]],
      ingredients: _fb.array([],),
    });
    this.fg.setValidators(this.ingretientValidators());
  }

  onSubmit(): void {
    this.fg.markAllAsTouched();
    if (!this.fg.valid) {
      console.log('Error');
      console.log(this.fg);

      return;
    }
    let recipe: Recipe = this.fg.value;
    console.log(recipe);
  }

  get ingredients(): FormArray {
    return this.fg.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(null, [Validators.required, Validators.maxLength(10)]));
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  ingretientValidators(): ValidatorFn | null {
    return (control: AbstractControl) => {

      let ings = control.get('ingredients');

      if ((ings as FormArray).length === 0) {
        return null;
      }
      if ((ings as FormArray).length < 2) {
        return { ingredientsLength: 'Min 2 ingredients' };
      }
      return null;
    }
  }
}
