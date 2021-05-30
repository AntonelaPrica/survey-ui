import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {QuestionVariantsComponent} from './question-variants.component';

@NgModule({
    imports: [SharedModule],
    declarations: [QuestionVariantsComponent],
    exports: [QuestionVariantsComponent]
})
export class QuestionVariantsModule {
}
