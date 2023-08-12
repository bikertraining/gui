<script lang="ts"
        setup>
import { object, string } from "yup";

const { formObj, getEdit, updateEcourse } = useAdminEcourse();

const route = useRoute();

const schema = object({
    link_3wbrc: string().required(),
    link_brc_e5: string().required()
});

definePageMeta({
    description: 'eCourse links',
    keywords: 'ecourse links, ecourse, links',
    layout: 'admin',
    title: 'eCourse Links'
});

onMounted(async () => {
    await getEdit();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <Form :validation-schema="schema"
                  @submit="updateEcourse">

                <div class="col-md-12">
                    <FormText v-model="formObj['link_3wbrc']"
                              :required="true"
                              help-text="MSF Unique Link"
                              label="3WBRC URL - eP1x7-9"
                              name="link_3wbrc"/>
                </div>

                <div class="col-md-12">
                    <FormText v-model="formObj['link_brc_e5']"
                              :required="true"
                              help-text="MSF Unique Link"
                              label="BRC URL - eP1x11"
                              name="link_brc_e5"/>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>