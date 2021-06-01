import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {SurveyModule} from './survey.module';
import {Survey} from './survey.types';
import {QuestionType} from './survey-question/survey-question.types';
import {QuestionVariant} from './survey-question/question-variants/question-variants.types';

const surveyBuilder: Survey = {
    title: '',
    questions: [{text: '', type: QuestionType.FreeText, data: ''}]
};
const surveyViewer: Survey = {
    title: 'Geography Test',
    questions: [{
        text: 'What is the official language of the Canadian province Quebec?',
        type: QuestionType.FreeText,
        data: ''
    },
        {
            text: 'How many countries are there in Africa?',
            type: QuestionType.Variants,
            data: [{text: '54'}, {text: '60'}, {text: '72'}] as QuestionVariant[]
        },
        {text: 'What is the oldest active volcano on Earth?', type: QuestionType.FreeText, data: ''},
        {text: 'What is the smallest country in the world?', type: QuestionType.FreeText, data: ''},
        {
            text: 'What is the largest country in South America?',
            type: QuestionType.Variants,
            data: [{text: 'Chile'}, {text: 'Brazil'}] as QuestionVariant[]
        }]
};

storiesOf('Survey', module)
    .addDecorator(moduleMetadata({
        declarations: [],
        imports: [SurveyModule]
    }))
    .addDecorator(withKnobs)
    .add('Survey Builder',
        () => ({
            template: `<div style="width:60%; margin: 10px"><sv-survey [survey]="surveyBuilder" [isEditMode]="true"></sv-survey></div>`,
            props: {
                surveyBuilder
            }
        }))
    .add('Survey Viewer',
        () => ({
            template: `<div style="width:60%; margin: 10px"><sv-survey [survey]="surveyViewer" [isEditMode]="false"></sv-survey></div>`,
            props: {
                surveyViewer
            }
        }));
