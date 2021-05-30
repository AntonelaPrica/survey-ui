import { FormArray, FormGroup } from '@angular/forms';
export declare const QuestionVariantsControlName = "options";
export declare const QuestionVariantsSubControlRadioName = "isSelected";
export declare const QuestionVariantsSubControlTextName = "text";
export declare class QuestionVariantsComponent {
    formGroup: FormGroup;
    isEditMode: boolean;
    controlName: string;
    subControlRadioName: string;
    subControlTextName: string;
    get optionsFormArray(): FormArray;
    get optionsControlArray(): FormGroup[];
    onCheckboxClicked(index: number): void;
    onRemoveOption(index: number): void;
    onAddOption(): void;
}
