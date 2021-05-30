import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export declare const SurveyQuestionControlTextName = "text";
export declare const SurveyQuestionControlSelectName = "type";
export declare const SurveyQuestionControlDataName = "data";
export declare class SurveyQuestionComponent implements OnInit {
    formGroup: FormGroup;
    isEditMode: boolean;
    textControlName: string;
    selectControlName: string;
    dataControlName: string;
    questionTypes: {
        key: string;
        value: any;
    }[];
    ngOnInit(): void;
    get selectControl(): FormControl;
    get dataControl(): FormGroup;
    get isSelectTypeFreeText(): boolean;
    onSelectChange(value: string): void;
    ensureDataControl(type: string): void;
    clearDataControls(): void;
}
