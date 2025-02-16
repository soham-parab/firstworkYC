import { questionSchema } from "./questionSchema";

export const formSchema = {
  formTitle: "",
  questions: [questionSchema],
  metadata: {
    createdAt: "",
    lastModified: "",
    author: "",
    formId: "",
  },
};
