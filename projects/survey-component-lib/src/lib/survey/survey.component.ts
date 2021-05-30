import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {createSurveyQuestion} from './survey-question/survey-question.utils';
import {Survey} from './survey.types';
import {convertFormValueToSurvey, createSurvey} from './survey.utils';

export const SurveyControlTitle = 'title';
export const SurveyControlQuestions = 'questions';

@Component({
    selector: 'sv-survey',
    templateUrl: 'survey.component.html',
    styleUrls: ['survey.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {
    @Input() survey: Survey;
    @Input() isEditMode = true;
    @Output() submit: EventEmitter<Survey> = new EventEmitter<Survey>();

    formGroup: FormGroup;
    titleControlName = SurveyControlTitle;
    questionsControlName = SurveyControlQuestions;

    ngOnInit(): void {
        this.formGroup = createSurvey(this.survey);
    }

    get questionControl(): FormArray {
        return this.formGroup?.controls?.[this.questionsControlName] as FormArray;
    }

    get questionControlArray(): FormGroup[] {
        return this.questionControl?.controls as FormGroup[];
    }

    onAddQuestion(): void {
        const question = createSurveyQuestion();
        (this.formGroup?.controls?.[this.questionsControlName] as FormArray).push(question);
    }

    onSubmit(): void {
        const survey = convertFormValueToSurvey(this.formGroup.value);
        this.submit.emit(survey);
    }

}
