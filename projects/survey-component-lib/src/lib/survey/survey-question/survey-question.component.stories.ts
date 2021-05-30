import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {SurveyQuestionModule} from './survey-question.module';
import {createSurveyQuestion} from './survey-question.utils';
import {QuestionType} from './survey-question.types';
import {QuestionVariant} from './question-variants/question-variants.types';

const surveyFreeTextQuestionForm = createSurveyQuestion({
    text: 'Free Text Q',
    type: QuestionType.FreeText,
    data: 'ceva'
});

const surveyVariantsQuestionForm = createSurveyQuestion({
    text: 'Variants Q',
    type: QuestionType.Variants,
    data: [{isSelected: true, text: 'ceva'}, {isSelected: false}, {
        isSelected: false,
        text: 'altceva'
    }] as QuestionVariant[]
});

storiesOf('Survey Question', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [SurveyQuestionModule]
    }))
    .addDecorator(withKnobs)
    .add('Survey Free Text Question Builder',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyFreeTextQuestionForm"></sv-survey-question>`,
            props: {
                surveyFreeTextQuestionForm
            }
        }))
    .add('Survey Variants Question Builder',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyVariantsQuestionForm"></sv-survey-question>`,
            props: {
                surveyVariantsQuestionForm
            }
        }))
    .add('Survey Free Text Question Viewer',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyFreeTextQuestionForm" [isEditMode]="false"></sv-survey-question>`,
            props: {
                surveyFreeTextQuestionForm
            }
        }))
    .add('Survey Variants Question Viewer',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyVariantsQuestionForm" [isEditMode]="false"></sv-survey-question>`,
            props: {
                surveyVariantsQuestionForm
            }
        }));
