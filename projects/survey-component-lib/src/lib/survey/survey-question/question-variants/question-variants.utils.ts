import {FormControl, FormGroup} from '@angular/forms';
import {QuestionVariantsSubControlRadioName, QuestionVariantsSubControlTextName} from './question-variants.component';
import {QuestionVariant} from './question-variants.types';

export const createOptionControl = (questionVariant: QuestionVariant = null) => new FormGroup({
    [QuestionVariantsSubControlRadioName]: new FormControl(questionVariant?.isSelected || null),
    [QuestionVariantsSubControlTextName]: new FormControl(questionVariant?.text || null)
});
