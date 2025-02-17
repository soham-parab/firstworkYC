import { createContext, useContext, ReactNode, useState } from "react";

interface Form {
  id: string;
  title: string;
  fields: FormField[];
}

interface FormField {
  id: string;
  type: "text" | "number" | "email" | "checkbox";
  label: string;
  required: boolean;
}

interface FormsContextType {
  forms: Form[];
  createForm: (title: string) => Form;
  addField: (formId: string, field: Omit<FormField, "id">) => void;
  deleteForm: (formId: string) => void;
  getForm: (formId: string) => Form | undefined;
}

const FormsContext = createContext<FormsContextType | undefined>(undefined);

export function FormsProvider({ children }: { children: ReactNode }) {
  const [forms, setForms] = useState<Form[]>([]);

  const createForm = (title: string): Form => {
    const newForm: Form = {
      id: crypto.randomUUID(),
      title,
      fields: [],
    };
    setForms((prev) => [...prev, newForm]);
    return newForm;
  };

  const addField = (formId: string, field: Omit<FormField, "id">) => {
    setForms((prev) =>
      prev.map((form) => {
        if (form.id === formId) {
          return {
            ...form,
            fields: [...form.fields, { ...field, id: crypto.randomUUID() }],
          };
        }
        return form;
      })
    );
  };

  const deleteForm = (formId: string) => {
    setForms((prev) => prev.filter((form) => form.id !== formId));
  };

  const getForm = (formId: string) => {
    return forms.find((form) => form.id === formId);
  };

  const value = {
    forms,
    createForm,
    addField,
    deleteForm,
    getForm,
  };

  return (
    <FormsContext.Provider value={value}>{children}</FormsContext.Provider>
  );
}

export function useFormsContext() {
  const context = useContext(FormsContext);
  if (context === undefined) {
    throw new Error("useFormsContext must be used within a FormsProvider");
  }
  return context;
}
