import {QuestionType, QuestionTypeKeys, SurveyQuestion} from './survey-question.types';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {
    SurveyQuestionControlDataName,
    SurveyQuestionControlSelectName,
    SurveyQuestionControlTextName
} from './survey-question.component';
import {QuestionFreetextControlName} from './question-freetext/question-freetext.component';
import {QuestionVariantsControlName} from './question-variants/question-variants.component';
import {QuestionVariant} from './question-variants/question-variants.types';
import {createOptionControl} from './question-variants/question-variants.utils';

export const createSurveyQuestion = (question: SurveyQuestion): FormGroup => {
    return new FormGroup({
        [SurveyQuestionControlTextName]: new FormControl(question?.text || null, []),
        [SurveyQuestionControlSelectName]: new FormControl(QuestionTypeKeys[question?.type] || null, []),
        [SurveyQuestionControlDataName]: createQuestionByType(question)
    });
};

const createQuestionByType = (question: SurveyQuestion): FormGroup => {
    if (question.type === QuestionType.FreeText) {
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
