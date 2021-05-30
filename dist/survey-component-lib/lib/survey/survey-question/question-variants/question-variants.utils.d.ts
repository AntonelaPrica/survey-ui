import { FormGroup } from '@angular/forms';
import { QuestionVariant, QuestionVariantForm } from './question-variants.types';
export declare const createOptionControl: (questionVariant?: QuestionVariant) => FormGroup;
export declare const convertFormValueToVariantArray: (formValue: QuestionVariantForm) => QuestionVariant[];
