import {FormArray, FormGroup} from '@angular/forms';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {QuestionVariantsModule} from './question-variants.module';
import {QuestionVariantsControlName} from './question-variants.component';
import {createOptionControl} from './question-variants.utils';


const variantsFormGroupBuilder = new FormGroup({
    [QuestionVariantsControlName]: new FormArray([
        createOptionControl({isSelected: true}),
        createOptionControl(),
        createOptionControl()
    ])
});

const variantsFormGroupViewer = new FormGroup({
    [QuestionVariantsControlName]: new FormArray([
        createOptionControl({ text: 'Asia', isSelected: false}),
        createOptionControl({ text: 'South America', isSelected: false})
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
            template: `<sv-question-variants [formGroup]="variantsFormGroupBuilder" [isEditMode]="true"></sv-question-variants>`,
            props: {
                variantsFormGroupBuilder
            }
        }))
    .add('Question Variants Viewer',
        () => ({
            template: `<sv-question-variants [formGroup]="variantsFormGroupViewer" [isEditMode]="false"></sv-question-variants>`,
            props: {
                variantsFormGroupViewer
            }
        }));
