import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {SurveyModule} from './survey.module';
import {Survey} from './survey.types';
import {QuestionType} from './survey-question/survey-question.types';
import {QuestionVariant} from './survey-question/question-variants/question-variants.types';

const survey: Survey = {
    title: 'my title',
    questions: [
        {
            text: 'Variants Q',
            type: QuestionType.Variants,
            data: [{isSelected: false, text: 'ceva'}, {isSelected: false}, {
                isSelected: false,
                text: 'altceva'
            }] as QuestionVariant[]
        },
    ]
};

storiesOf('Survey', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [SurveyModule]
    }))
    .addDecorator(withKnobs)
    .add('Survey Builder',
        () => ({
            template: `<div style="width:70%; margin: 10px"><sv-survey [survey]="survey" [isEditMode]="true"></sv-survey></div>`,
            props: {
                survey
            }
        }))
    .add('Survey Viewer',
        () => ({
            template: `<div style="width:70%; margin: 10px"><sv-survey [survey]="survey" [isEditMode]="false"></sv-survey></div>`,
            props: {
                survey
            }
        }));
