import { SurveyQuestion, SurveyQuestionForm } from './survey-question.types';
import { FormGroup } from '@angular/forms';
export declare const createSurveyQuestion: (question?: SurveyQuestion) => FormGroup;
export declare const convertFormValueToSurveyQuestion: (formValue: SurveyQuestionForm) => SurveyQuestion;
