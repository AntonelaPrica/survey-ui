import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveyQuestion, SurveyQuestionAnswer} from '../types/survey.types';

@Component({
  selector: 'sv-survey-question',
  templateUrl: 'survey-question.component.html',
  styleUrls: ['survey-question.component.scss']
})
export class SurveyQuestionComponent implements OnInit {
  @Input() questionGroup?: FormGroup;
  questionType = 'freeText';
  questionOptions: FormArray;
  freeTextAnswer: string;

  @Input() questionIndex: number;
  @Input() editMode: boolean;

  @Output() questionDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.editMode === true) {
      this.questionGroup = this.formBuilder.group(
        {
          questionText: this.formBuilder.control('', [Validators.required]),
          questionType: this.formBuilder.control('freeText', [Validators.required]),
          questionOptions: this.formBuilder.array([this.createOption(), this.createOption()])
        });
    } else {
      this.questionType = this.questionGroup.get('questionType').value;
    }
  }

  onAddOption(): void {
    this.questionGroup.get('questionOptions')['controls'].push(this.createOption());
  }

  createOption(): FormControl {
    return this.formBuilder.control('');
  }

  removeOption(index): void {
    (this.questionGroup.get('questionOptions') as FormArray).removeAt(index);
  }

  onQuestionTypeChange(): void {
    if (this.questionType === 'variants') {
      this.questionOptions = this.questionGroup.get('questionOptions') as FormArray;
      this.questionOptions.controls.splice(2);
    }
  }

  createSurveyQuestionFromForm(): SurveyQuestion {
    const surveyQ = new SurveyQuestion();
    surveyQ.questionText = this.questionGroup.get('questionText').value;
    surveyQ.questionType = this.questionGroup.get('questionType').value;

    const options = [];
    this.questionGroup.get('questionOptions')['controls'].forEach(option => {

      console.log(option);
      options.push(option.value);
    });

    surveyQ.questionOptions = this.questionGroup.get('questionOptions').value;
    return surveyQ;
  }

  getQuestionAnswer(): SurveyQuestionAnswer{
    console.log(this.freeTextAnswer); // undefined
    return {
      questionId: this.questionIndex,
      answer: this.freeTextAnswer
    };
  }

}
