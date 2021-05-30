import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SurveyControlQuestions, SurveyControlTitle} from './survey.component';
import {Survey, SurveyForm} from './survey.types';
import {convertFormValueToSurveyQuestion, createSurveyQuestion} from './survey-question/survey-question.utils';
import {SurveyQuestion} from './survey-question/survey-question.types';


export const createSurvey = (survey: Survey): FormGroup => {
    return new FormGroup({
        [SurveyControlTitle]: new FormControl(survey?.title || null, []),
        [SurveyControlQuestions]: createSurveyQuestionsArray(survey.questions)
    });
};

const createSurveyQuestionsArray = (surveyQuestions: SurveyQuestion[] = []): FormArray => {
    return new FormArray(surveyQuestions.map(surveyQuestion => createSurveyQuestion(surveyQuestion)));
};

export const convertFormValueToSurvey = (formValue: SurveyForm): Survey => {
    return {
        title: formValue.title,
        questions: formValue.questions.map(question => convertFormValueToSurveyQuestion(question))
    };
};
