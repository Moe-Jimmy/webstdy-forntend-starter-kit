<template>
  <Form
    v-if="schema.schema.fields.length > 0"
    @submit="onSubmit"
    :initial-values="{ terms: false }"
  >
    <div
      v-for="field in schema.schema.fields"
      :key="field.name"
      class="flex gap-4 mb-4"
    >
      <label :for="field.name">{{ field.label }}</label>

      <!-- If Radio -->
      <template v-if="field.as === 'radio'">
        <div class="flex gap-4 flex-col">
          <div
            v-for="child in field.children"
            :key="child.value"
            class="flex items-center gap-2"
          >
            <Field
              type="radio"
              :id="`${field.name}-${child.value}`"
              :name="field.name"
              :value="child.value"
              :rules="field.rules"
              class="border border-red-500"
            />
            <label :for="`${field.name}-${child.value}`">
              {{ child.text }}
            </label>
          </div>
        </div>
      </template>

      <!-- If Checkbox -->
      <template v-else-if="field.as === 'checkbox'">
        <div>
          <Field
            as="input"
            type="checkbox"
            :id="field.name"
            :name="field.name"
            :rules="field.rules"
            :value="true"
            :unchecked-value="false"
            class="border border-red-500"
          />
        </div>
      </template>

      <!-- If Select -->
      <template v-else-if="field.as === 'select'">
        <Field
          as="select"
          :id="field.name"
          :name="field.name"
          :rules="field.rules"
          class="border border-red-500"
        >
          <option
            v-for="child in field.children"
            :key="child.value"
            :value="child.value"
          >
            {{ child.text }}
          </option>
        </Field>
      </template>

      <!-- Normal Input, Textarea -->
      <template v-else>
        <Field
          :as="field.as"
          :id="field.name"
          :name="field.name"
          :type="field.type || 'text'"
          :rules="field.rules"
          class="border border-red-500"
        />
      </template>

      <!-- Error Message -->
      <ErrorMessage :name="field.name" class="text-red-500 text-sm mt-1" />
    </div>

    <button class="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
      Submit
    </button>
  </Form>

  <ErrorMessage name="form" class="text-red-500 text-sm mt-1" v-else />
</template>

<script setup lang="ts">
import type { FormSchema } from "~/types/FormSchema";
import { Form, Field, ErrorMessage } from "vee-validate";

const schema = defineProps<{
  schema: FormSchema;
}>();

function onSubmit(values: any) {
  console.log("Form submitted! Values:", values);
}
</script>

<style scoped></style>
