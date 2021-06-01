import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {SurveyQuestionModule} from './survey-question.module';
import {createSurveyQuestion} from './survey-question.utils';
import {QuestionType} from './survey-question.types';
import {QuestionVariant} from './question-variants/question-variants.types';

const surveyQuestionFormBuilder = createSurveyQuestion({
    text: '',
    type: QuestionType.FreeText,
    data: ''
});

const surveyFreeTextQuestionFormViewer = createSurveyQuestion({
    text: 'What is the official language of the Canadian province Quebec?',
    type: QuestionType.FreeText,
    data: ''
});

const surveyVariantsQuestionFormViewer = createSurveyQuestion({
    text: 'Which is the largest continent on Earth?',
    type: QuestionType.Variants,
    data: [{isSelected: false, text: 'Europe'},
        {isSelected: false, text: 'Asia'},
        {isSelected: false, text: 'South America'}] as QuestionVariant[]
});

storiesOf('Survey Question', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [SurveyQuestionModule]
    }))
    .addDecorator(withKnobs)
    .add('Survey Question Builder',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyQuestionFormBuilder" [isEditMode]="true"></sv-survey-question>`,
            props: {
                surveyQuestionFormBuilder
            }
        }))
    .add('Survey Free Text Question Viewer',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyFreeTextQuestionFormViewer" [isEditMode]="false"></sv-survey-question>`,
            props: {
                surveyFreeTextQuestionFormViewer
            }
        }))
    .add('Survey Variants Question Viewer',
        () => ({
            template: `<sv-survey-question [formGroup]="surveyVariantsQuestionFormViewer" [isEditMode]="false"></sv-survey-question>`,
            props: {
                surveyVariantsQuestionFormViewer
            }
        }));
