import { EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Survey } from './survey.types';
export declare const SurveyControlTitle = "title";
export declare const SurveyControlQuestions = "questions";
export declare class SurveyComponent implements OnInit {
    survey: Survey;
    isEditMode: boolean;
    submit: EventEmitter<Survey>;
    formGroup: FormGroup;
    titleControlName: string;
    questionsControlName: string;
    ngOnInit(): void;
    get questionControl(): FormArray;
    get questionControlArray(): FormGroup[];
    onAddQuestion(): void;
    onSubmit(): void;
}
