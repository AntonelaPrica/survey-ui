import {FormArray, FormGroup} from '@angular/forms';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {QuestionVariantsModule} from './question-variants.module';
import {QuestionVariantsControlName} from './question-variants.component';
import {createOptionControl} from './question-variants.utils';


const variantsFormGroup = new FormGroup({
    [QuestionVariantsControlName]: new FormArray([
        createOptionControl({isSelected: true}),
        createOptionControl(),
        createOptionControl()
    ])
});

storiesOf('Question Variants', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [QuestionVariantsModule]
    }))
    .addDecorator(withKnobs)
    .add('Question Variants Builder',
        () => ({
            template: `<sv-question-variants [formGroup]="variantsFormGroup"></sv-question-variants>`,
            props: {
                variantsFormGroup
            }
        }))
    .add('Question Variants Viewer',
        () => ({
            template: `<sv-question-variants [formGroup]="variantsFormGroup" [isEditMode]="false"></sv-question-variants>`,
            props: {
                variantsFormGroup
            }
        }));
