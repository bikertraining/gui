<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

definePageMeta({ auth: false });

const { formObj: priceObj, getPrices } = useClientPrice();

const {
    formArr,
    formObj,
    getDefaults,
    getSchedule,
    nonFieldFormError,
    nonFieldFormMessage,
    submitRegistration,
    utilGetSchedule,
    utilUpdatePrice,
    utilValidateCoupon
} = useClientRegister();

const couponSchema = object({
    coupon_code: string().required()
});

const route = useRoute();

const schema = object({
    address: string().required(),
    can_email: boolean(),
    city: string().required(),
    class_type: string().required(),
    comment: string(),
    coupon_code: string(),
    credit_card_cvv2: string().required().min(3).max(4),
    credit_card_first_name: string().required(),
    credit_card_last_name: string().required(),
    credit_card_month: string().required().min(1).max(2),
    credit_card_number: string().required().min(15).max(16),
    credit_card_year: string().required().length(4),
    dln: string().required(),
    dls: string().required(),
    dob: string().required(),
    email: string().required().email(),
    first_name: string().required(),
    last_name: string().required(),
    phone: string().required(),
    schedule: string().required(),
    state: string().required(),
    xpl: string(),
    zipcode: string().required()
});

const { getBusinessEmail, getBusinessPhone } = useUtils();

onMounted(() => {
    getDefaults(route.params);

    getPrices();

    getSchedule();
});

useHead({
    title: 'Register Online',
    meta: [
        { name: 'description', content: 'Register Online' },
        {
            name: 'keywords',
            content: 'register'
        }
    ]
});
</script>

<template>
    <div class="py-5 pt-3 row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <Form :validation-schema="schema"
                  @submit="submitRegistration">
                <FormHidden v-model="formObj['class_type']"
                            :required="false"
                            name="class_type"/>

                <FormHidden v-model="formObj['coupon_code']"
                            :required="false"
                            name="coupon_code"/>

                <h4 class="mb-3">
                    <svg aria-hidden="true"
                         class="text-dark"
                         data-icon="calendar-days"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
                              fill="currentColor"/>
                    </svg>

                    Available Classes
                </h4>

                <div class="row g-3">
                    <div class="col-md-12">
                        <FormSelectSchedule v-model="formObj['schedule']"
                                            :options="utilGetSchedule(formArr)"
                                            :required="true"
                                            help-text="Date of class you are signing up for"
                                            label="Schedule"
                                            name="schedule"
                                            v-on:change="utilUpdatePrice(formObj['schedule'])"/>
                    </div>

                    <div v-if="formObj['schedule'] && !formObj['coupon_is_active']"
                         class="col-md-6 fw-bolder mt-0 mb-3">
                        <Form :validation-schema="couponSchema"
                              @submit="utilValidateCoupon">
                            <FormText v-model="formObj['coupon_code']"
                                      :required="false"
                                      label="Coupon Code"
                                      name="coupon_code"/>

                            <button class="w-100 btn btn-primary btn-sm"
                                    type="submit">
                                <svg aria-hidden="true"
                                     class="text-white"
                                     data-icon="tag"
                                     data-prefix="fa-solid"
                                     focusable="false"
                                     role="img"
                                     style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                     viewBox="0 0 448 512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class=""
                                          d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                          fill="currentColor"/>
                                </svg>

                                Apply
                            </button>
                        </form>
                    </div>

                    <div class="col-md-12 fw-bolder mt-0">Total ${{ formObj['amount'] }}</div>

                    <div v-if="formObj['class_type'] === '3wbrc'"
                         class="col-md-12 fw-bolder mt-3">
                        <div class="mb-3">Class times are Sunday 1:00 PM to 4:00 PM and Monday 7:00 AM to 3:00 PM.</div>

                        <div class="mb-3">For those who are not registering for the Can-AM Spyder program, you must
                            bring your own 3-wheel motorcycle for training purposes.
                        </div>

                        <span class="text-danger mt-3">If you are looking for the Can-AM Spyder Training</span>&nbsp;

                        <NuxtLink target="_blank"
                                  to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
                            <button class="btn btn-success btn-sm px-4 gap-3"
                                    type="button">
                                Click Here
                            </button>
                        </NuxtLink>
                    </div>

                    <div v-if="formObj['class_type'] === 'brc'"
                         class="col-md-12 fw-bolder mt-3">
                        Class times are from 7:00 AM to 4:00 PM each day.
                    </div>

                    <div v-if="formObj['class_type'] === 'erc'"
                         class="col-md-12 fw-bolder mt-3">
                        Class times are from 12:00 PM (Noon) to 5:30 PM.
                    </div>
                </div>

                <hr class="my-4">

                <h4 class="mb-3">
                    <svg aria-hidden="true"
                         class="text-dark"
                         data-icon="user-plus"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 640 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                              fill="currentColor"/>
                    </svg>

                    Student Enrollment
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['first_name']"
                                  :required="true"
                                  help-text="As printed on your Drivers License"
                                  label="First Name"
                                  name="first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['last_name']"
                                  :required="true"
                                  help-text="As printed on your Drivers License"
                                  label="Last Name"
                                  name="last_name"/>
                    </div>

                    <div class="col-md-12">
                        <FormText v-model="formObj['address']"
                                  :required="true"
                                  label="Address"
                                  name="address"/>
                    </div>

                    <div class="col-md-5">
                        <FormText v-model="formObj['city']"
                                  :required="true"
                                  label="City"
                                  name="city"/>
                    </div>

                    <div class="col-md-4">
                        <FormSelectState v-model="formObj['state']"
                                         :required="true"
                                         country="US"
                                         label="State"
                                         name="state"/>
                    </div>

                    <div class="col-md-3">
                        <FormText v-model="formObj['zipcode']"
                                  :required="true"
                                  label="Zipcode"
                                  max-length="28"
                                  name="zipcode"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['email']"
                                  :required="true"
                                  label="Email"
                                  name="email"
                                  type="email"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['phone']"
                                  :required="true"
                                  label="Phone Number"
                                  name="phone"
                                  type="tel"/>
                    </div>

                    <div class="col-md-5">
                        <FormText v-model="formObj['dln']"
                                  :required="true"
                                  label="Drivers License Number"
                                  name="dln"/>
                    </div>

                    <div class="col-md-3">
                        <FormSelectState v-model="formObj['dls']"
                                         :required="true"
                                         country="US"
                                         label="License State of Issue"
                                         name="dls"/>
                    </div>

                    <div class="col-md-4">
                        <FormText v-model="formObj['dob']"
                                  :required="true"
                                  help-text="MM/DD/YYYY"
                                  label="Date of Birth"
                                  max-length="10"
                                  name="dob"
                                  type="tel"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

                <h4 class="mb-3">
                    <svg aria-hidden="true"
                         class="text-dark"
                         data-icon="motorcycle"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 640 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M342.5 32C357.2 32 370.7 40.05 377.6 52.98L391.7 78.93L439.1 39.42C444.9 34.62 452.1 32 459.6 32H480C497.7 32 512 46.33 512 64V96C512 113.7 497.7 128 480 128H418.2L473.3 229.1C485.5 226.1 498.5 224 512 224C582.7 224 640 281.3 640 352C640 422.7 582.7 480 512 480C441.3 480 384 422.7 384 352C384 311.1 402.4 276.3 431.1 252.8L415.7 224.2C376.1 253.4 352 299.8 352 352C352 362.1 353.1 373.7 355.2 384H284.8C286.9 373.7 287.1 362.1 287.1 352C287.1 263.6 216.4 192 127.1 192H31.1V160C31.1 142.3 46.33 128 63.1 128H165.5C182.5 128 198.7 134.7 210.7 146.7L255.1 192L354.1 110.3L337.7 80H279.1C266.7 80 255.1 69.25 255.1 56C255.1 42.75 266.7 32 279.1 32L342.5 32zM448 352C448 387.3 476.7 416 512 416C547.3 416 576 387.3 576 352C576 316.7 547.3 288 512 288C509.6 288 507.2 288.1 504.9 288.4L533.1 340.6C539.4 352.2 535.1 366.8 523.4 373.1C511.8 379.4 497.2 375.1 490.9 363.4L462.7 311.2C453.5 322.3 448 336.5 448 352V352zM253.8 376C242.5 435.2 190.5 480 128 480C57.31 480 0 422.7 0 352C0 281.3 57.31 224 128 224C190.5 224 242.5 268.8 253.8 328H187.3C177.9 304.5 154.9 288 128 288C92.65 288 64 316.7 64 352C64 387.3 92.65 416 128 416C154.9 416 177.9 399.5 187.3 376H253.8zM96 352C96 334.3 110.3 320 128 320C145.7 320 160 334.3 160 352C160 369.7 145.7 384 128 384C110.3 384 96 369.7 96 352z"
                              fill="currentColor"/>
                    </svg>

                    Optional Information
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormSelect v-model="formObj['xpl']"
                                    :options="{
                                                  'none': 'None',
                                                  'some': 'Some, but a long time ago',
                                                  '1_6': '1 to 6 months',
                                                  '6_12': '6 to 12 months',
                                                  'more': 'More than one year',
                                                  'dirt': 'Dirt bike only'
                                              }"
                                    :required="false"
                                    label="Current Level of Motorcycle Experience"
                                    name="xpl"/>
                    </div>

                    <div class="col-md-12">
                        <FormTextArea v-model="formObj['comment']"
                                      :required="false"
                                      help-text="Anything we should be aware of?"
                                      label="Comments"
                                      name="comment"
                                      rows="3"/>
                    </div>

                    <div class="col-md-6 mb-3">
                        <FormSwitch v-model="formObj['can_email']"
                                    help-text="We only send on average 4 emails per year"
                                    label="Notify me about upcoming events"
                                    name="can_email"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

                <h4 class="mb-3">
                    <svg aria-hidden="true"
                         class="text-dark"
                         data-icon="credit-card"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 576 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z"
                              fill="currentColor"/>
                    </svg>

                    Payment
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_first_name']"
                                  :required="true"
                                  help-text="First name as displayed on card"
                                  label="First Name"
                                  name="credit_card_first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText

                            v-model="formObj['credit_card_last_name']"
                            :required="true"
                            help-text="Last name as displayed on card"
                            label="Last Name"
                            name="credit_card_last_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_number']"
                                  :required="true"
                                  label="Credit Card Number"
                                  max-length="16"
                                  name="credit_card_number"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_cvv2']"
                                  :required="true"
                                  label="CVV"
                                  max-length="4"
                                  name="credit_card_cvv2"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormSelect v-model="formObj['credit_card_month']"
                                    :options="{
                                                '1': '01',
                                                '2': '02',
                                                '3': '03',
                                                '4': '04',
                                                '5': '05',
                                                '6': '06',
                                                '7': '07',
                                                '8': '08',
                                                '9': '09',
                                                '10': '10',
                                                '11': '11',
                                                '12': '12'
                                              }"
                                    :required="true"
                                    label="Expiration Month"
                                    name="credit_card_month"/>
                    </div>

                    <div class="col-md-6">
                        <FormSelect v-model="formObj['credit_card_year']"
                                    :options="{
                                                '2023': '2023',
                                                '2024': '2024',
                                                '2025': '2025',
                                                '2026': '2026',
                                                '2027': '2027',
                                                '2028': '2028',
                                                '2029': '2029',
                                                '2030': '2030',
                                                '2031': '2031',
                                                '2032': '2032'
                                              }"
                                    :required="true"
                                    label="Expiration Year"
                                    name="credit_card_year"/>
                    </div>
                </div>

                <div v-if="nonFieldFormError"
                     class="text-danger my-3 fs-5 border border-danger border-2 rounded-3">
                    <span class="mx-2">{{ nonFieldFormMessage }}</span>
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Protected by</span> <img alt="Let's Encrypt"
                                                                   height="50"
                                                                   src="/img/svg/le_logo.svg"/>
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <svg aria-hidden="true"
                         class="text-white"
                         data-icon="lock"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                              fill="currentColor"/>
                    </svg>

                    Register
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h4 class="mb-3">
                <svg aria-hidden="true"
                     class="text-danger"
                     data-icon="triangle-exclamation"
                     data-prefix="fa-solid"
                     focusable="false"
                     role="img"
                     style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                     viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class=""
                          d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                          fill="currentColor"/>
                </svg>

                Notice
            </h4>

            <div class="mb-3">After submitting your application, you will receive an email by the next business day (or
                before your class starts) confirming your enrollment and providing all details about your specific
                class. If you’d prefer to enroll on the phone, give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a>.
            </div>

            <div>
                <h6>REFUND/CANCELLATION POLICY</h6>

                <div class="mb-3">When enrolling, you are purchasing a seat in the class of your choice. Once purchased,
                    that seat is set aside for only your use. Please select the date that will ensure you can attend
                    each day for the times indicated. You must attend all class/range sessions.
                </div>

                <div class="mb-3"><span class="fw-bold">Cancellation:</span> All fees are nonrefundable unless students
                    call <a class="text-dark text-decoration-none"
                            v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a> or email
                    <a v-bind:href="'mailto:' + getBusinessEmail()"> {{ getBusinessEmail() }}</a> 6 days prior to their
                    scheduled class to obtain a partial refund. A partial refund is full tuition minus a processing fee.

                    <ol class="list-group-numbered list-group-flush mt-3">
                        <li class="list-group-item">Basic RiderCourse ${{
                                priceObj['brc']['process_amount'].slice(0, -3)
                            }}
                        </li>

                        <li class="list-group-item">3-Wheel RiderCourse ${{
                                priceObj['3wbrc']['process_amount'].slice(0, -3)
                            }}
                        </li>

                        <li class="list-group-item">Experienced RiderCourse ${{
                                priceObj['erc']['process_amount'].slice(0, -3)
                            }}
                        </li>
                    </ol>
                </div>

                <div class="mb-3">There is a minimum of four students per class. If minimum is not met, student has
                    option to move to any future class or receive a full refund.
                </div>

                <div class="mb-3"><span class="fw-bold">Postponement:</span> There is no charge for postponement
                    provided the student calls or emails at least 48 hours prior to the start of their scheduled class.
                    If less than 48 hours prior or if a student does not complete the entire class, a seat in a
                    subsequent class may be purchased.
                </div>

                <div class="mb-3"><span class="fw-bold">Late Arrivals:</span> Learning to ride a motorcycle requires
                    skill progression. This progression begins with small tasks and builds to larger, more complex
                    tasks. It is critical that students arrive on time. Preferably, come early! If you miss a class or
                    range session, you will not be allowed to complete the course and will have to purchase another seat
                    in a later class.
                </div>

                <div class="mb-3"><span class="fw-bold">eCourse:</span> The eCourse is a national requirement for
                    motorcycle training. You will be emailed a unique link to complete the eCourse before attending
                    class.
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>