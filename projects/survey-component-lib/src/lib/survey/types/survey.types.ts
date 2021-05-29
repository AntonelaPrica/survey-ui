export enum QuestionType {
  FreeText = 'freeText',
  Variants = 'variants'
}

export class SurveyQuestion {
  questionText: string;
  questionType: QuestionType;
  questionOptions?: string[] = [];
}

export class SurveySchema {
  surveyTitle: string;
  surveyQuestions: SurveyQuestion[] = [];
}

export class SurveyQuestionAnswer {
  questionId: number; // index
  answer: string;
}

export class SurveyResult {
  answers: SurveyQuestionAnswer[] = [];
}
