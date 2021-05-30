import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {SurveyQuestionModule} from '../survey/survey-question/survey-question.module';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDividerModule
    ],
    exports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDividerModule
    ]
})
export class SharedModule {

}
