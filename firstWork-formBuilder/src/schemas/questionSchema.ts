export const questionSchema = {
  id: "",
  title: "",
  isCompulsory: false,
  questionType: "", // can be "text", "number", "multipleChoice", "checkbox", etc.
  inputType: "", // specific input requirements like "email", "phone", "date" etc.
  options: [], // for multiple choice or checkbox questions
  validation: {
    required: false,
    minLength: null,
    maxLength: null,
    pattern: null,
    customValidation: null,
  },
  helperText: "",
  defaultValue: null,
};
