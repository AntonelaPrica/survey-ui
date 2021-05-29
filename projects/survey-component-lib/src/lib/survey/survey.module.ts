import {NgModule} from '@angular/core';

import {SurveyComponent} from './survey.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {SurveyQuestionComponent} from './survey-question/survey-question.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [SurveyComponent, SurveyQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatRadioModule
  ],
  exports: [SurveyComponent]
})
export class SurveyModule {
}
