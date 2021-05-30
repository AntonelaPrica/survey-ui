import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

export const QuestionFreetextControlName = 'textarea';

@Component({
    selector: 'sv-question-freetext',
    templateUrl: 'question-freetext.component.html',
    styleUrls: ['question-freetext.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFreetextComponent {
    @Input() formGroup: FormGroup;
    controlName = QuestionFreetextControlName;
}
