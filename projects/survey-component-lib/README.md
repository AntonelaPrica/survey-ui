## Survey UI Component Library
Survey is a library of components using Angular Material for various use cases.
Please checkout the storybook at https://github.com/AntonelaPrica/survey-ui.

### Installation
In order to use the `survey` library you should install it from npm using
`npm install survey-component-lib`.

### Survey Usage
Use the custom tag `<sv-survey>` in your html with the following properties:
* `survey` - object that must implement the interface *Survey* of the following form:
```js
{
    title: string;
    questions: SurveyQuestion[];
}
```
where a *Survey Question* is of the form: 
```js
{ 
    text: string;
    type: QuestionType;
    data: QuestionVariant[] | string;
}
```
and a *QuestionVariant*:
```js
{ 
    isSelected: boolean;
    text: string;
}
```

The allowed *QuestionTypes* are 'Free Text' or 'Variant'.
* `isEditMode` - boolean value; if the value passed is *true*, then the component can be used to create a new custom survey; in case of value *false* it will display the survey passed at the previous mentioned property (`survey`)

Pressing the `Submit` button at the end of the survey will emit the `submitSurvey` event which will contain the survey with questions or answers.

#### Usage Examples
##### Builder
`<sv-survey [survey]="survey" [isEditMode]="true">`
```js
survey: Survey = {
    title: '',
    questions: [{text: '', type: QuestionType.FreeText, data: ''}]
};
```
![builder](https://user-images.githubusercontent.com/47983382/120333023-f6e75b00-c2f7-11eb-8699-1b36bc0eff7c.PNG)

##### Viewer
`<sv-survey [survey]="survey" [isEditMode]="false">`
```js
survey: Survey = {
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
    }]
};
```
![viewer](https://user-images.githubusercontent.com/47983382/120333111-0bc3ee80-c2f8-11eb-890d-37a35021d170.PNG)
