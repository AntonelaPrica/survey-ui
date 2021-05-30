import {NgModule} from '@angular/core';
import {SurveyQuestionComponent} from './survey-question.component';
import {QuestionVariantsModule} from './question-variants/question-variants.module';
import {QuestionFreetextModule} from './question-freetext/question-freetext.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [SharedModule, QuestionVariantsModule, QuestionFreetextModule],
    declarations: [SurveyQuestionComponent],
    exports: [SurveyQuestionComponent]
})
export class SurveyQuestionModule {
}
