export interface QuestionVariant {
    isSelected?: boolean;
    text?: string;
}
export interface QuestionVariantOptionForm {
    isSelected?: boolean;
    text?: string;
}
export interface QuestionVariantForm {
    options: QuestionVariantOptionForm[];
}
