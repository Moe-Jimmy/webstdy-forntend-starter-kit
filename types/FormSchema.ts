import * as Yup from "yup";

interface FormField {
  label: string;
  name: string;
  as: "input" | "textarea" | "checkbox" | "radio" | "select";
  type?: string;
  children?: Array<{
    value: string | number;
    text: string;
    type?: string;
  }>;
  rules?: Yup.AnySchema;
}

export interface FormSchema {
  fields: FormField[];
}
