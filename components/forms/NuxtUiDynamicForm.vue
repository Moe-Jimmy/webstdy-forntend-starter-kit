<script setup lang="ts">
import type { FormSchema } from "~/types/FormSchema";
import { Form, Field, ErrorMessage } from "vee-validate";

// Props
const schema = defineProps<{
  schema: FormSchema;
}>();

// Submit handler
function onSubmit(values: any) {
  console.log("Form submitted:", values);
}
</script>
<template>
  <Form v-if="schema.schema.fields.length > 0" @submit="onSubmit">
    <div
      v-for="field in schema.schema.fields"
      :key="field.name"
      class="flex flex-col gap-2 mb-4"
    >
      <label :for="field.name" class="font-medium mb-1">
        {{ field.label }}
      </label>

      <!-- Dynamic Field -->
      <Field
        :name="field.name"
        :rules="field.rules"
        v-slot="{ field: fieldBindings, meta }"
      >
        <!-- Input -->
        <UInput
          v-if="field.as === 'input'"
          v-bind="fieldBindings"
          :type="field.type || 'text'"
          :id="field.name"
          :name="field.name"
        />

        <!-- Select -->
        <USelect
          v-else-if="field.as === 'select'"
          v-bind="fieldBindings"
          :options="field.children"
          option-attribute="value"
          label-attribute="text"
        />

        <!-- Radio -->
        <div v-else-if="field.as === 'radio'" class="flex flex-col gap-1">
          <URadio
            v-for="child in field.children"
            :key="child.value"
            v-bind="fieldBindings"
            :id="`${field.name}-${child.value}`"
            :name="field.name"
            :value="child.value"
            :label="child.text"
          />
        </div>

        <!-- Checkbox -->
        <UCheckbox
          v-else-if="field.as === 'checkbox'"
          v-bind="fieldBindings"
          :label="field.label"
        />

        <!-- Error display -->
        <ErrorMessage :name="field.name" v-slot="{ message }">
          <div class="text-red-500 text-sm mt-1">{{ message }}</div>
        </ErrorMessage>
      </Field>
    </div>

    <UButton type="submit" color="primary">Submit</UButton>
  </Form>
</template>
