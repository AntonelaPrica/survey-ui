import { FormGroup } from '@angular/forms';
import { Survey, SurveyForm } from './survey.types';
export declare const createSurvey: (survey: Survey) => FormGroup;
export declare const convertFormValueToSurvey: (formValue: SurveyForm) => Survey;
