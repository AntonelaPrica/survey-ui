import {QuestionType, QuestionTypeKeys, SurveyQuestion, SurveyQuestionForm} from './survey-question.types';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {
    SurveyQuestionControlDataName,
    SurveyQuestionControlSelectName,
    SurveyQuestionControlTextName
} from './survey-question.component';
import {QuestionFreetextControlName} from './question-freetext/question-freetext.component';
import {QuestionVariantsControlName} from './question-variants/question-variants.component';
import {QuestionVariant, QuestionVariantForm} from './question-variants/question-variants.types';
import {convertFormValueToVariantArray, createOptionControl} from './question-variants/question-variants.utils';
import {convertFormFreeTextToString} from "./question-freetext/question-freetext.utils";
import {QuestionFreeTextForm} from "./question-freetext/question-freetext.types";


export const createSurveyQuestion = (question: SurveyQuestion = null): FormGroup => {
    const type = question?.type ? QuestionTypeKeys[question.type] : QuestionTypeKeys[QuestionType.FreeText];
    return new FormGroup({
        [SurveyQuestionControlTextName]: new FormControl(question?.text || null, []),
        [SurveyQuestionControlSelectName]: new FormControl(type, []),
        [SurveyQuestionControlDataName]: createQuestionByType(question, type)
    });
};

const createQuestionByType = (question: SurveyQuestion, actualType: string): FormGroup => {
    if (actualType === QuestionTypeKeys[QuestionType.FreeText]) {
        return new FormGroup({
            [QuestionFreetextControlName]: new FormControl((question?.data as string) || null, []),
        });
    } else {
        const options: FormGroup[] = ((question?.data as QuestionVariant[]) || [])
            .map(questionVariant => createOptionControl(questionVariant));
        return new FormGroup({
            [QuestionVariantsControlName]: new FormArray(options, [])
        });
    }
};

export const convertFormValueToSurveyQuestion = (formValue: SurveyQuestionForm): SurveyQuestion => {
    return {
        text: formValue.text,
        type: QuestionType[formValue.type],
        data: formValue.type === 'FreeText' ?
            convertFormFreeTextToString(formValue.data as QuestionFreeTextForm) :
            convertFormValueToVariantArray(formValue.data as QuestionVariantForm)
    };
};

