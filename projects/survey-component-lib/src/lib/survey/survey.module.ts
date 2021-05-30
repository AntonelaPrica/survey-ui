import {NgModule} from '@angular/core';
import {SurveyComponent} from './survey.component';
import {SurveyQuestionModule} from './survey-question/survey-question.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [SurveyComponent],
    imports: [SharedModule, SurveyQuestionModule],
    providers: [],
    exports: [SurveyComponent]
})
export class SurveyModule {
}
