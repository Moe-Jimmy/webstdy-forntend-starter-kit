<script setup lang="ts">
import type { FormSchema } from "~/types/FormSchema";
import * as Yup from "yup";
const { t } = useI18n();
const formSchema: FormSchema = {
  fields: [
    {
      label: "Your Name",
      name: "name",
      as: "input",
      rules: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
    },
    {
      label: "Your Email",
      name: "email",
      as: "input",
      type: "email",
      rules: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    },
    {
      label: "Your Password",
      name: "password",
      as: "input",
      type: "password",
      rules: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    },
    {
      label: "Favorite Drink",
      name: "drink",
      as: "select",
      children: [
        { value: "", text: "All" },
        { value: "coffee", text: "Coffee" },
        { value: "tea", text: "Tea" },
        { value: "coke", text: "Coke" },
      ],
      rules: Yup.string().required("Please select a drink"),
    },
    {
      label: "Gender",
      name: "gender",
      as: "radio",
      rules: Yup.string().required(),
      children: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
      ],
    },
    {
      label: "Agree to Terms",
      name: "terms",
      as: "checkbox",
      type: "checkbox",
      rules: Yup.bool().oneOf([true], "You must accept the terms"),
    },
  ],
};
</script>
<template>
  <div>
    <FormsDynamicForm :schema="formSchema" />
  </div>
</template>
<style scoped></style>
