import { QuestionVariant, QuestionVariantForm } from './question-variants/question-variants.types';
import { QuestionFreeTextForm } from "./question-freetext/question-freetext.types";
export declare enum QuestionType {
    FreeText = "Free Text",
    Variants = "Variants"
}
export declare const QuestionTypeKeys: {
    "Free Text": string;
    Variants: string;
};
export interface SurveyQuestion {
    text: string;
    type: QuestionType;
    data: QuestionVariant[] | string;
}
export interface SurveyQuestionForm {
    text: string;
    type: 'FreeText' | 'Variants';
    data: QuestionVariantForm | QuestionFreeTextForm;
}
