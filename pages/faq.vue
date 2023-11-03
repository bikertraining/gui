<script lang="ts"
        setup>
const { formObj, getPrices } = useClientPrice();

const route = useRoute();

const { getBusinessEmail, getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Frequently Asked Questions',
    keywords: 'motorcycle frequently asked questions',
    title: 'FAQ'
});

onMounted(async () => {
    await getPrices();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3">
        <div id="accordionFaq"
             class="accordion">
            <div class="accordion-item">
                <div id="heading1"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse1"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse1"
                            data-bs-toggle="collapse"
                            type="button">
                        How do I register for the course?
                    </button>
                </div>

                <div id="collapse1"
                     aria-labelledby="heading1"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        There are several ways to register for the course.

                        You can
                        <NuxtLink class="text-decoration-none"
                                  to="/schedule">register online
                        </NuxtLink>
                        <span class="fw-bold">OR</span> call us at <a class="text-dark text-decoration-none"
                                                                      v-bind:href="'tel:' + getBusinessPhone(true)">{{
                            getBusinessPhone(false)
                                                                                                                    }}</a>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading2"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse2"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse2"
                            data-bs-toggle="collapse"
                            type="button">
                        Where are the classes taught?
                    </button>
                </div>

                <div id="collapse2"
                     aria-labelledby="heading2"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Pensacola Harley-Davidson<br> 6385 Pensacola Blvd<br> Pensacola, Florida<br> 32505
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading3"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse3"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse3"
                            data-bs-toggle="collapse"
                            type="button">
                        How much are the courses?
                    </button>
                </div>

                <div id="collapse3"
                     aria-labelledby="heading3"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        All the courses we offer and prices can be found on our
                        <NuxtLink class="text-decoration-none"
                                  to="/courses">courses
                        </NuxtLink>
                        page.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading4"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse4"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse4"
                            data-bs-toggle="collapse"
                            type="button">
                        Can I talk to someone about the courses you offer?
                    </button>
                </div>

                <div id="collapse4"
                     aria-labelledby="heading4"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Of course, call us at <a class="text-dark text-decoration-none"
                                                 v-bind:href="'tel:' + getBusinessPhone(true)">
                        {{ getBusinessPhone(false) }}</a>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading5"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse5"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse5"
                            data-bs-toggle="collapse"
                            type="button">
                        What type of equipment am I required to bring?
                    </button>
                </div>

                <div id="collapse5"
                     aria-labelledby="heading5"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>You will be responsible to bring the following:</p>

                        <ol class="list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                <span class="fw-bold">Over the ankle sturdy footwear</span>. It's recommended you wear a
                                                                                           shoe that allows you to feel
                                                                                           the foot controls. Shoes or
                                                                                           boots with a large heel or
                                                                                           steel toe make it
                                                                                           increasingly difficult to
                                                                                           shift, especially for women.
                            </li>

                            <li class="list-group-item">
                                Long pants made out of sturdy materials. No spandex or sweatpants.
                            </li>

                            <li class="list-group-item">
                                Long sleeve shirt or jacket. Light colors work best when it's hot outside.
                            </li>

                            <li class="list-group-item">
                                <span class="fw-bold">Full fingered</span> gloves.
                            </li>

                            <li class="list-group-item">
                                <span class="fw-bold">D.O.T</span> helmet
                            </li>

                            <li class="list-group-item">
                                Eye protection. Glasses are considered eye protection for the purpose of this course.
                            </li>

                            <li class="list-group-item">
                                As it may rain, it's recommended to have motorcycle rain gear or consider bringing a
                                change of clothes.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading6"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse6"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse6"
                            data-bs-toggle="collapse"
                            type="button">
                        Will the class be cancelled if it rains?
                    </button>
                </div>

                <div id="collapse6"
                     aria-labelledby="heading6"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        No, we will ride in the rain just as you would in real-life.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading7"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse7"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse7"
                            data-bs-toggle="collapse"
                            type="button">
                        How old do I have to be?
                    </button>
                </div>

                <div id="collapse7"
                     aria-labelledby="heading7"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Students must be 16 years of age and have at least a learners permit. If you have a learners
                        permit, you can take the class but you will not be allowed to get your motorcycle endorsement at
                        the DMV unless you've had the learners permit for at least one year.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading8"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse8"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse8"
                            data-bs-toggle="collapse"
                            type="button">
                        What type of motorcycle do you use?
                    </button>
                </div>

                <div id="collapse8"
                     aria-labelledby="heading8"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        We use the Harley-Davidson Street 500 motorcycle the new Harley-Davidson x350RA.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading9"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse9"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse9"
                            data-bs-toggle="collapse"
                            type="button">
                        I'm concerned about my height and/or weight.
                    </button>
                </div>

                <div id="collapse9"
                     aria-labelledby="heading9"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        We have several different seats available for all sizes of students. If you would like to try
                        having a seat on one of our training bikes prior to the class please give us a call to setup a
                        date and time.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading10"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse10"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse10"
                            data-bs-toggle="collapse"
                            type="button">
                        Can I use my own motorcycle in the course?
                    </button>
                </div>

                <div id="collapse10"
                     aria-labelledby="heading10"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        For the Basic RiderCourse and Kickstart course, students will use our training motorcycles. For
                        the 3-Wheeled Basic RiderCourse and the Skilled RiderCourse students can use their own
                        motorcycles.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading11"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse11"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse11"
                            data-bs-toggle="collapse"
                            type="button">
                        I don't have a 3-Wheeled motorcycle, can one be provided?
                    </button>
                </div>

                <div id="collapse11"
                     aria-labelledby="heading11"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        There are limited options available. Please call us for the latest information.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading12"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse12"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse12"
                            data-bs-toggle="collapse"
                            type="button">
                        What defines a 3-Wheeled motorcycle?
                    </button>
                </div>

                <div id="collapse12"
                     aria-labelledby="heading12"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <div class="accordion-body p-3">
                            <p>
                                A 3-Wheel motorcycle <span class="fw-bold">must</span> meet the following requirements:
                            </p>

                            <ol class="list-group-numbered list-group-flush">
                                <li class="list-group-item">
                                    Three-track wheel orientation (leaves three separate tracks during straight-line
                                    operation). Dual wheels may be in the front or rear.
                                </li>

                                <li class="list-group-item">
                                    Motorcycle-based conversion or design. Handlebar steering Motorcycle-type controls
                                    arranged with the standard convention (convenience alterations such as a single
                                    brake pedal or lever control, automatic clutch, or automatic transmission are
                                    allowed), Saddle seating, Seating causes rider/passenger to straddle vehicle. If
                                    designed for a passenger, passenger must be seated behind operator.
                                </li>

                                <li class="list-group-item">
                                    Turning diameter of the vehicle at its widest point must be less than 40 feet.
                                </li>

                                <li class="list-group-item">
                                    The vehicle must meet all applicable federal/state on-road vehicle standards.
                                </li>

                                <li class="list-group-item">
                                    Under no circumstances will vehicles with the following designs characteristics be
                                    allowed in the 3WBRC: Automotive hybrids or automotive conversions, vehicles with
                                    automotive controls or seating, vehicles with rear or front mounted engines (engines
                                    must be mounted midframe below the rider), vehicles with enclosed or semi-enclosed
                                    riding compartments, any other significant departure from the standard motorcycle
                                    design.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading13"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse13"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse13"
                            data-bs-toggle="collapse"
                            type="button">
                        How do you get the motorcycle endorsement on my drivers license after the class?
                    </button>
                </div>

                <div id="collapse13"
                     aria-labelledby="heading13"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        At the end of the class you will receive a completion card. Take this card along with your
                        current Florida Drivers License and about $40 to your Tax Collector or DMV office and they will
                        issue you a brand new drivers license with the endorsement.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading14"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse14"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse14"
                            data-bs-toggle="collapse"
                            type="button">
                        What is the refund policy?
                    </button>
                </div>

                <div id="collapse14"
                     aria-labelledby="heading14"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        When enrolling, you are purchasing a seat in the class of your choice. Once purchased, that seat
                        is set aside for only your use. Please select the date that will ensure you can attend each day
                        for the times indicated. You must attend all class/range sessions.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading15"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse15"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse15"
                            data-bs-toggle="collapse"
                            type="button">
                        What is the cancellation policy?
                    </button>
                </div>

                <div id="collapse15"
                     aria-labelledby="heading15"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        All fees are nonrefundable unless students call <a class="text-dark text-decoration-none"
                                                                           v-bind:href="'tel:' + getBusinessPhone(true)">
                        {{ getBusinessPhone(false) }}</a> or email <a v-bind:href="'mailto:' + getBusinessEmail()">
                        {{ getBusinessEmail() }}</a> 6 days prior to their scheduled class to obtain a partial refund. A
                        partial refund is full tuition minus a processing fee.

                        <ol class="list-group-numbered list-group-flush mt-3">
                            <li class="list-group-item">
                                Basic RiderCourse ${{ formObj['brc']['process_amount'] }}
                            </li>

                            <li class="list-group-item">
                                3-Wheel RiderCourse ${{ formObj['3wbrc']['process_amount'] }}
                            </li>

                            <li class="list-group-item">
                                Skilled RiderCourse ${{ formObj['src']['process_amount'] }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading16"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse16"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse16"
                            data-bs-toggle="collapse"
                            type="button">
                        How can I postpone my class?
                    </button>
                </div>

                <div id="collapse16"
                     aria-labelledby="heading16"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>There is no charge for postponement provided the student calls or emails at least 48 hours
                           prior to their scheduled class. If less than 48 hours prior or if a student does not
                           complete the entire class, a seat in a subsequent class may be purchased:</p>

                        <ol class="list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                Basic RiderCourse ${{ formObj['brc']['re_amount'] }}
                            </li>

                            <li class="list-group-item">
                                3-Wheel RiderCourse ${{ formObj['3wbrc']['re_amount'] }}
                            </li>

                            <li class="list-group-item">
                                Skilled RiderCourse ${{ formObj['src']['re_amount'] }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading17"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse17"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse17"
                            data-bs-toggle="collapse"
                            type="button">
                        What if I am late or miss part of the class?
                    </button>
                </div>

                <div id="collapse17"
                     aria-labelledby="heading17"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Learning to ride a motorcycle requires skill progression. This progression begins with small
                        tasks and builds to larger, more complex tasks. It is critical that students arrive on time.
                        Preferably, come early! If you miss a class or range session, you will not be allowed to
                        complete the course and will have to purchase another seat in a later class.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading18"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse18"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse18"
                            data-bs-toggle="collapse"
                            type="button">
                        Is there any pre-course material?
                    </button>
                </div>

                <div id="collapse18"
                     aria-labelledby="heading18"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <div class="fw-bold mb-3">
                            The eCourse is a requirement prior to taking the BRC or 3-wheel BRC.
                        </div>

                        <div class="mb-3">
                            Once you have registered for a class we will email you a unique link to complete the 5-hour
                            online eCourse.
                        </div>

                        <div>
                            After successful completion of the eCourse you'll receive a certificate which is good for 30
                            days. If the certificate is older than 30 days you must retake the online eCourse to earn a
                            new certificate.
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading19"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse19"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse19"
                            data-bs-toggle="collapse"
                            type="button">
                        What is the eCourse?
                    </button>
                </div>

                <div id="collapse19"
                     aria-labelledby="heading19"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        The MSF Basic eCourse is a highly interactive 5-hour online program that provides riders of all
                        skill levels with the basics of motorcycling. With integrated graphics, photos and video to
                        illustrate the lessons, and allows you to control the pace of your learning. Please note that
                        the Basic eCourse alone is NOT accepted as a license waiver by any state's department of motor
                        vehicles, or as a license to ride a motorcycle or as a learner’s permit.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <div id="heading20"
                     class="accordion-header border-bottom border-white">
                    <button aria-controls="collapse20"
                            aria-expanded="false"
                            class="accordion-button collapsed"
                            data-bs-target="#collapse20"
                            data-bs-toggle="collapse"
                            type="button">
                        How long is the endorsement certificate we receive good for?
                    </button>
                </div>

                <div id="collapse20"
                     aria-labelledby="heading20"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        After successful completion of the class, you'll receive a certificate which is only valid for
                        <span class="fw-bold">one year</span> from the date printed. If you do not get the motorcycle
                        endorsement on your drivers license within that one year, you must retake the class to earn
                        another certificate. Most states adhere to this but they may have other requirements or change
                        their policies without notice. Please check with your local DMV office for official information.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-body {
    padding: 0;
}

.accordion-button {
    background-color: #212529;
    color: #FFFFFF;
}

.accordion-button.collapsed::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:hover {
    background-color: #FE5C26 !important;
    color: #FFFFFF;
}

.accordion-button:not(.collapsed) {
    background-color: #FE5C26;
    color: #FFFFFF;
    box-shadow: 0 0 0 0;
}

.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-item {
    border-bottom: 0;
}
</style>