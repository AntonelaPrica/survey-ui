import {Component, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveyResult, SurveySchema} from './types/survey.types';
import {SurveyQuestionComponent} from './survey-question/survey-question.component';


@Component({
  selector: 'sb-survey',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() editMode: boolean;

  surveyForm: FormGroup;

  // edit mode true
  @Output() createdSurvey: SurveySchema;

  // edit mode false
  @Input() surveyToDisplay: SurveySchema;
  @Output() surveyAnswers: SurveyResult;

  @ViewChildren(SurveyQuestionComponent) questionComponents: QueryList<SurveyQuestionComponent>;

  constructor(private formBuilder: FormBuilder) {
    this.surveyForm = new FormGroup({});
  }

  ngOnInit(): void {
    if (this.editMode === true) {
      this.surveyForm = this.formBuilder.group({
        surveyTitle: this.formBuilder.control('', [Validators.required]),
        surveyQuestions: this.formBuilder.array([this.createQuestion()])
      });
    } else {
      this.surveyForm = this.createFormFromSurveySchema(this.surveyToDisplay);
    }
  }

  onAddQuestion(): void {
    // const surveyQuestions = this.surveyForm.get('surveyQuestions') as FormArray;
    // surveyQuestions.push(this.createQuestion());
    this.surveyForm.get('surveyQuestions')['controls'].push(this.createQuestion());
  }

  createQuestion(): FormGroup {
    return this.formBuilder.group({
        //   questionText: this.formBuilder.control('', [Validators.required]),
        //   questionType: this.formBuilder.control('freeText', [Validators.required]),
        //   questionOptions: this.formBuilder.array(
        //     [this.formBuilder.control('', [Validators.required]),
        //                   this.formBuilder.control('', [Validators.required])])
      }
    );
  }

  onDeleteQuestion(index): void {
    (this.surveyForm.get('surveyQuestions') as FormArray).removeAt(index);
  }

  onSubmit(): any {
    if (this.editMode === true) // builder case
    {
      console.log(this.createSurveySchemaFromForm());
      return this.createSurveySchemaFromForm();
    }else{
      // viewer case
      console.log(this.getSurveyResults());
      return this.getSurveyResults();
    }
  }

  createSurveySchemaFromForm(): SurveySchema {
    this.createdSurvey = new SurveySchema();
    this.createdSurvey.surveyTitle = this.surveyForm.get('surveyTitle').value;
    this.questionComponents.forEach(question => this.createdSurvey.surveyQuestions.push(question.createSurveyQuestionFromForm()));

    return this.createdSurvey;
  }

  createFormFromSurveySchema(surveySchema): FormGroup {
    const questions = [];
    surveySchema.surveyQuestions.forEach(question => questions.push(this.createFormGroupFromSurveyQuestion(question)));
    return new FormGroup(
      {
        surveyTitle: new FormControl(surveySchema.surveyTitle),
        surveyQuestions: new FormArray(questions)
      });
  }

  createFormGroupFromSurveyQuestion(surveyQuestion): FormGroup {
    const options = [];
    surveyQuestion.questionOptions.forEach(option => options.push(new FormControl(option)));
    return new FormGroup({
      questionText: new FormControl(surveyQuestion.questionText),
      questionType: new FormControl(surveyQuestion.questionType),
      questionOptions: new FormArray(options)
    });
  }

  getSurveyResults(): SurveyResult{
    const results: SurveyResult = {
      answers: []
    };

    this.questionComponents.forEach(question => results.answers.push(question.getQuestionAnswer()));
    return results;
  }

}
