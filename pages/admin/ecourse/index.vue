<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {formObj, getEdit, updateEcourse} = useAdminEcourse();

const {loadingState} = usePageLoading();

const route = useRoute();

const schema = object({
  link_3wbrc: string().required(),
  link_brc_e3: string(),
  link_brc_e5: string().required(),
  link_src: string()
});

definePageMeta({
  description: 'eCourse links',
  layout: 'admin',
  title: 'eCourse Links'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getEdit();

  loadingState.isActive = false;
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="mt-3">
    <Form
        :validation-schema="schema"
        @submit="updateEcourse">
      <div
          class="row col-sm-12 col-md-12 col-lg-12 col-xl-6">
        <div
            class="col-md-12">
          <FormText
              v-model="formObj['link_3wbrc']"
              :required="true"
              help-text="MSF Unique Link"
              label="3WBRC URL - eP1x7-9"
              name="link_3wbrc"/>
        </div>

        <div
            class="col-md-12">
          <FormText
              v-model="formObj['link_brc_e3']"
              :required="false"
              help-text="MSF Unique Link"
              label="BRC URL - e3x5x10"
              name="link_brc_e3"/>
        </div>

        <div
            class="col-md-12">
          <FormText
              v-model="formObj['link_brc_e5']"
              :required="true"
              help-text="MSF Unique Link"
              label="BRC URL - eP1x11"
              name="link_brc_e5"/>
        </div>

        <div
            class="col-md-12">
          <FormText
              v-model="formObj['link_src']"
              :required="false"
              help-text="MSF Unique Link"
              label="SRC URL - SS1"
              name="link_src"/>
        </div>
      </div>

      <button
          class="px-4 btn btn-outline-success"
          type="submit">
        Update
      </button>
    </Form>
  </div>
</template>

<style scoped>

</style>