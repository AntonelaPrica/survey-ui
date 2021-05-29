import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {SurveyModule} from './survey.module';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {QuestionType, SurveySchema} from './types/survey.types';


const surveyForm = new FormGroup({
  surveyTitle: new FormControl('My survey title'),
  surveyQuestions: new FormArray([
    new FormGroup({
      questionText: new FormControl('This is my question?'),
      questionType: new FormControl('freeText'),
      questionOptions: new FormArray([])
    }),

    new FormGroup({
      questionText: new FormControl('Is this the second question?'),
      questionType: new FormControl('variants'),
      questionOptions: new FormArray([
        new FormControl('a'), new FormControl('b'), new FormControl('c')
      ])
    }),

    new FormGroup({
      questionText: new FormControl('This is my question?'),
      questionType: new FormControl('freeText'),
      questionOptions: new FormArray([])
    }),

    new FormGroup({
      questionText: new FormControl('This is my question?'),
      questionType: new FormControl('freeText'),
      questionOptions: new FormArray([])
    }),

    new FormGroup({
      questionText: new FormControl('Is this the second question?'),
      questionType: new FormControl('variants'),
      questionOptions: new FormArray([
        new FormControl('a'), new FormControl('b'), new FormControl('c')
      ])
    })
  ])
});

const surveyToDisplay: SurveySchema = ({
  surveyTitle: 'My survey title',
  surveyQuestions: [{
    questionText: 'This is my question?',
    questionType: QuestionType.FreeText,
    questionOptions: []
  },
    {
      questionText: 'Is this the second question?',
      questionType: QuestionType.Variants,
      questionOptions: ['a', 'b', 'c']
    },
    {
      questionText: 'This is my question?',
      questionType: QuestionType.FreeText,
      questionOptions: []
    },
    {
      questionText: 'This is my question?',
      questionType: QuestionType.FreeText,
      questionOptions: []
    },
    {
      questionText: 'Is this the second question?',
      questionType: QuestionType.Variants,
      questionOptions: ['a', 'b']
    }]
});


storiesOf('Survey', module)
  .addDecorator(moduleMetadata({
    declarations: [],
    imports: [SurveyModule]
  }))
  .addDecorator(withKnobs)
  .add('Survey viewer',
    () => ({
      template: `<sb-survey [editMode]="false" [surveyToDisplay]="surveyToDisplay"></sb-survey>`,
      props: {
        surveyToDisplay
      }
    }))
  .add( 'Survey builder',
    () => ({
      template: `<sb-survey [editMode]="true"></sb-survey>`,
      props: {
        surveyToDisplay
      }
    }));
