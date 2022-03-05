<template>
    <div id="top"
         class="row pt-3">
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Private Lessons</h4>
                </div>

                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>Private instruction is available for riders of all skill levels from beginners to advanced.
                        </li>

                        <li class="mt-3">We can provide tailored instruction to meet your exact needs.</li>
                    </ul>

                    <div class="row">
                        <div class="text-center">
                            <button class="w-50 btn btn-lg btn-outline-success"
                                    type="button">
                                <font-awesome-icon :icon="['fas', 'phone']"/>
                                Call us at {{ business_phone }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "ThePrivate",
    setup() {
        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        return {
            business_phone
        };
    }
});
</script>