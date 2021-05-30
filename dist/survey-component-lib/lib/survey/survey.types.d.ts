import { SurveyQuestion, SurveyQuestionForm } from './survey-question/survey-question.types';
export interface Survey {
    title: string;
    questions: SurveyQuestion[];
}
export interface SurveyForm {
    title: string;
    questions: SurveyQuestionForm[];
}
