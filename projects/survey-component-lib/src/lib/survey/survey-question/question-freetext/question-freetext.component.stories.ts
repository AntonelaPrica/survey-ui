import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionFreetextModule} from './question-freetext.module';
import {QuestionFreetextControlName} from './question-freetext.component';

const freeTextFormGroup = new FormGroup({
    [QuestionFreetextControlName]: new FormControl(null, [Validators.required])
});

storiesOf('Question Freetext', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [QuestionFreetextModule]
    }))
    .addDecorator(withKnobs)
    .add('Question Freetext Component',
        () => ({
            template: `<sv-question-freetext [formGroup]="freeTextFormGroup"></sv-question-freetext>`,
            props: {
                freeTextFormGroup
            }
        }));
