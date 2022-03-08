<template>
    <div id="top"
         class="row pt-3">
        <div class="col-lg-6">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header"
                     style="background-color: #42b983;">
                    <div class="d-flex justify-content-between pt-3">
                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fas', 'comments']"
                                               class="me-1"/>
                            Thank you
                        </h4>

                        <h5>
                            <font-awesome-icon :icon="['fas', 'phone']"
                                               class="me-1"/>
                            <a class="text-white text-decoration-none"
                               v-bind:href="'tel:' + business_phone">{{ business_phone }}</a>
                        </h5>
                    </div>
                </div>

                <div class="card-body">
                    <p>Thank you for contacting us!</p>

                    We will reply to your message as soon as we can.
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheThank",
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            business_phone
        };
    }
});
</script>