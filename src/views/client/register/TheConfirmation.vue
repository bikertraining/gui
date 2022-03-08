<template>
    <div id="top"
         class="row pt-3">
        <div class="col-lg-12">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header"
                     style="background-color: #42b983;">
                    <div class="d-flex justify-content-between pt-3">
                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fas', 'motorcycle']"
                                               class="me-1"/>
                            Registration Confirmation
                        </h4>
                    </div>
                </div>

                <div class="card-body">
                    <div class="mb-3">Thank you for registering for one of our motorcycle courses.</div>

                    <div class="mb-3">Soon you will receive an email confirming your registration. The confirmation
                        email will contain all the information you need to know to come prepared for class.
                    </div>

                    <div class="mb-3">If for some reason you do not receive the email within 24 hours please call us at
                        <a class="text-dark text-decoration-none"
                           v-bind:href="'tel:' + business_phone">{{ business_phone }}</a>
                    </div>

                    <div>
                        <h6>REFUND/CANCELLATION POLICY</h6>

                        <div class="mb-3">When enrolling, you are purchasing a seat in the class of your choice. Once
                            purchased, that seat is set aside for only your use. Please select the date that will ensure
                            you can attend each day for the times indicated. You must attend all class/range sessions.
                        </div>

                        <div class="mb-3"><span class="fw-bold">Cancellation:</span> All fees are nonrefundable unless
                            students call <a class="text-dark text-decoration-none"
                                             v-bind:href="'tel:' + business_phone">{{ business_phone }}</a> or email
                            <a v-bind:href="'mailto:' + business_email">{{ business_email }}</a> 6 days prior to their
                            scheduled class to obtain a partial refund. A partial refund is full tuition minus a
                            ${{ prices.price_processing_fee }} processing fee.
                        </div>

                        <div class="mb-3">There is a minimum of four students per class. If minimum is not met, student
                            has option to move to any future class or receive a full refund.
                        </div>

                        <div class="mb-3"><span class="fw-bold">Postponement:</span> There is no charge for postponement
                            provided the student calls or emails at least 48 hours prior to the start of their scheduled
                            class. If less than 48 hours prior or if a student does not complete the entire class, a
                            seat in a subsequent class may be purchased for
                            <span v-if="class_type === 'brc'">${{ prices.price_brc_reenroll }}</span>
                            <span v-if="class_type === 'erc'">${{ prices.price_erc_reenroll }}</span>
                            <span v-if="class_type === '3wbrc'">${{ prices.price_threewrc_reenroll }}</span>.
                        </div>

                        <div class="mb-3"><span class="fw-bold">Late Arrivals:</span> Learning to ride a motorcycle
                            requires skill progression. This progression begins with small tasks and builds to larger,
                            more complex tasks. It is critical that students arrive on time. Preferably, come early! If
                            you miss a class or range session, you will not be allowed to complete the course and will
                            have to purchase another seat in a later class.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "TheConfirmation",
    setup() {
        const brc_reenroll = process.env.VUE_APP_PRICE_BRC_REENROLL;

        const business_email = process.env.VUE_APP_BUSINESS_EMAIL;

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const prices = {
            price_brc_reenroll: process.env.VUE_APP_PRICE_BRC_REENROLL,
            price_erc_reenroll: process.env.VUE_APP_PRICE_ERC_REENROLL,
            price_threewrc_reenroll: process.env.VUE_APP_PRICE_THREEWBRC_REENROLL,
            price_processing_fee: process.env.VUE_APP_PRICE_PROCESSING_FEE
        };

        const route = useRoute();

        const class_type = route.params.class_type;

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            brc_reenroll,
            business_email,
            business_phone,
            class_type,
            prices
        };
    }
});
</script>