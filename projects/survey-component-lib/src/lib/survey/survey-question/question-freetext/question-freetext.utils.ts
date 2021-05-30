import {QuestionFreeTextForm} from './question-freetext.types';

export const convertFormFreeTextToString = (formValue: QuestionFreeTextForm): string => {
    return formValue.textarea;
};
