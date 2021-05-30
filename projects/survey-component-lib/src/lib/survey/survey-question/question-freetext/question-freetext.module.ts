import {NgModule} from '@angular/core';
import {QuestionFreetextComponent} from './question-freetext.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [QuestionFreetextComponent],
    imports: [SharedModule],
    exports: [QuestionFreetextComponent]
})
export class QuestionFreetextModule {
}
