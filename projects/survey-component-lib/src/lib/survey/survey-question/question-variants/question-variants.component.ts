import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {createOptionControl} from './question-variants.utils';

export const QuestionVariantsControlName = 'options';
export const QuestionVariantsSubControlRadioName = 'isSelected';
export const QuestionVariantsSubControlTextName = 'text';

@Component({
    selector: 'sv-question-variants',
    templateUrl: 'question-variants.component.html',
    styleUrls: ['question-variants.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionVariantsComponent {
    @Input() formGroup: FormGroup;
    @Input() isEditMode = true;

    controlName = QuestionVariantsControlName;
    subControlRadioName = QuestionVariantsSubControlRadioName;
    subControlTextName = QuestionVariantsSubControlTextName;

    get optionsFormArray(): FormArray {
        return this.formGroup?.controls?.[this.controlName] as FormArray;
    }

    get optionsControlArray(): FormGroup[] {
        return this.optionsFormArray?.controls as FormGroup[];
    }

    onCheckboxClicked(index: number): void {

        this.optionsControlArray.forEach((value, formGroupIndex) => {
            if (formGroupIndex !== index) {
                value.controls[this.subControlRadioName].setValue(false);
            }
        });
    }

    onRemoveOption(index: number): void {
        if (this.optionsFormArray.length > 2) {
            (this.formGroup?.controls?.[this.controlName] as FormArray).removeAt(index);
        }
    }

    onAddOption(): void {
        (this.formGroup?.controls?.[this.controlName] as FormArray).push(createOptionControl());
    }
}
