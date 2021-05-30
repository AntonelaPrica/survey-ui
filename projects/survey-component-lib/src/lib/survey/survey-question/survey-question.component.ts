import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {QuestionVariantsControlName} from "./question-variants/question-variants.component";
import {QuestionFreetextControlName} from "./question-freetext/question-freetext.component";
import {createOptionControl} from "./question-variants/question-variants.utils";
import {QuestionType, QuestionTypeKeys} from "./survey-question.types";

export const SurveyQuestionControlTextName = 'text';
export const SurveyQuestionControlSelectName = 'type';
export const SurveyQuestionControlDataName = 'data';

@Component({
    selector: 'sv-survey-question',
    templateUrl: 'survey-question.component.html',
    styleUrls: ['survey-question.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyQuestionComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Input() isEditMode = true;

    textControlName = SurveyQuestionControlTextName;
    selectControlName = SurveyQuestionControlSelectName;
    dataControlName = SurveyQuestionControlDataName;

    questionTypes = Object.keys(QuestionType).map(key => ({key, value: QuestionType[key]}));

    ngOnInit(): void {
        if (!this.selectControl.value) {
            this.selectControl.setValue(QuestionTypeKeys[QuestionType.FreeText]);
            this.ensureDataControl(QuestionTypeKeys[QuestionType.FreeText]);
        }
    }

    get selectControl(): FormControl {
        return this.formGroup.get(this.selectControlName) as FormControl;
    }

    get dataControl(): FormGroup {
        return this.formGroup.get(this.dataControlName) as FormGroup;
    }

    get isSelectTypeFreeText(): boolean {
        return this.selectControl.value === QuestionTypeKeys[QuestionType.FreeText];
    }

    onSelectChange(value: string): void {
        this.ensureDataControl(value);
    }

    ensureDataControl(type: string): void {
        const questionType = QuestionType[type];
        this.clearDataControls();
        if (questionType === QuestionType.FreeText) {
            this.dataControl.addControl(QuestionFreetextControlName, new FormControl(null));
        } else {
            this.dataControl.addControl(QuestionVariantsControlName, new FormArray([
                createOptionControl({isSelected: true}),
                createOptionControl()
            ]));
        }
    }

    clearDataControls(): void {
        this.dataControl.removeControl(QuestionVariantsControlName);
        this.dataControl.removeControl(QuestionFreetextControlName);
    }
}
