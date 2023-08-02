<script lang="ts"
        setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'RiderCoach Frequently Asked Questions',
    keywords: 'ridercoach frequently asked questions, ridercoach, rider coach, coach, instructor, faq',
    title: 'RiderCoach FAQ'
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
                        What are the requirements to become a RiderCoach?
                    </button>
                </div>

                <div id="collapse1"
                     aria-labelledby="heading1"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>To become a RiderCoach:</p>

                        <ol class="list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                Be at least 18 years of age.
                            </li>

                            <li class="list-group-item">Have a motorcycle license or endorsement.
                            </li>

                            <li class="list-group-item">Have a good driving record.
                            </li>

                            <li class="list-group-item">Have no criminal history.
                            </li>

                            <li class="list-group-item">Ride a registered and insured motorcycle frequently on the
                                street.
                            </li>

                            <li class="list-group-item">Good communication skills.
                            </li>

                            <li class="list-group-item">Sincere desire to help others.
                            </li>
                        </ol>
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
                        RiderCoach Prep Course (RCP)
                    </button>
                </div>

                <div id="collapse2"
                     aria-labelledby="heading2"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        All RiderCoach candidates must complete an RCP (RiderCoach Prep Course). These are sponsored by
                        the State of Florida and are held several times of the year. The RCP is normally a week long for
                        8 hours each day. The last 2 days of class you'll teach a class with real students. After
                        completion of the RCP you'll be certified to teach the MSF (Motorcycle Safety Foundation) BRC
                        (Basic RiderCourse).
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
                        What information will I be required to know?
                    </button>
                </div>

                <div id="collapse3"
                     aria-labelledby="heading3"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>All training to prepare you for the RCP will be done by Biker Training LLC.</p>

                        <p>Here is a list of what you can expect to learn:</p>

                        <ol class="list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                How to setup the range; cone placement, motorcycle positioning for the start of class,
                                setup rest area for students.
                            </li>

                            <li class="list-group-item">Motorcycle demonstrations. This shows the proper path of travel,
                                speed, and ease of use.
                            </li>

                            <li class="list-group-item">How to setup the classroom; Reading material for students and
                                computer for presentation materials.
                            </li>

                            <li class="list-group-item">Classroom facilitation.
                            </li>

                            <li class="list-group-item">Dealer activities to help students find the proper gear and
                                motorcycle fit.
                            </li>
                        </ol>
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
                        What is Demo Boot Camp?
                    </button>
                </div>

                <div id="collapse4"
                     aria-labelledby="heading4"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>Demo Boot Camp is a 2 day course that all RiderCoach Candidates must complete before being
                            allowed to ride demonstrations in front of students.</p>

                        <p>This will prepare you to learn the proper path of travel, proper speed, and smoothness of how
                            a demonstration should look like.</p>

                        <p>We will also cover how to properly setup the range for each exercise with proper cone
                            placement and how to coordinate the color of cones to help students with the proper path of
                            travel.</p>
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
                                shoe that allows you to feel the foot controls. Shoes or boots with a large heel or
                                steel toe make it increasingly difficult to shift, especially for women.
                            </li>

                            <li class="list-group-item">Long pants made out of sturdy materials. No spandex or
                                sweatpants.
                            </li>

                            <li class="list-group-item">Long sleeve shirt or jacket. Light colors work best when it's
                                hot outside.
                            </li>

                            <li class="list-group-item"><span class="fw-bold">Full fingered</span> gloves.
                            </li>

                            <li class="list-group-item"><span class="fw-bold">D.O.T</span> helmet</li>

                            <li class="list-group-item">Eye protection. Glasses are considered eye protection for the
                                purpose of this course.
                            </li>

                            <li class="list-group-item">As it may rain, it's recommended to have motorcycle rain gear or
                                consider bringing a change of clothes.
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
                        I have a job already but would like to do this part time
                    </button>
                </div>

                <div id="collapse6"
                     aria-labelledby="heading6"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Have a job already? No problem! Most RiderCoaches have normal jobs already and we can work
                        around your schedule.
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
                        How long does it normally take to become a RiderCoach?
                    </button>
                </div>

                <div id="collapse7"
                     aria-labelledby="heading7"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        This depends on how much time you are willing to put into the curriculum. However, the typical
                        candidate will normally take 3 to 6 months.
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
                        Are there any costs involved?
                    </button>
                </div>

                <div id="collapse8"
                     aria-labelledby="heading8"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        All training materials are paid for by Biker Training LLC. In the event you must travel for an
                        RCP, the costs will be either covered by us or reimburssed.
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
                        I'm already a certified MSF RiderCoach
                    </button>
                </div>

                <div id="collapse9"
                     aria-labelledby="heading9"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        <p>If you are already certified by MSF give us a call at
                            <a class="text-dark text-decoration-none"
                               v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a> and let's
                            talk!</p>

                        <p>If you are certified by another state we can help you with the required paperwork to get you
                            into the FRTP program (Florida Rider Training Program). This is a simple process!</p>

                        <p>FRTP paperwork is required to teach in the State of Florida.</p>
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
                        Do we get paid?
                    </button>
                </div>

                <div id="collapse10"
                     aria-labelledby="heading10"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        Yes, of course!
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
                        I have more questions!
                    </button>
                </div>

                <div id="collapse11"
                     aria-labelledby="heading11"
                     class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <div class="accordion-body p-3">
                        We have answers! Use the
                        <NuxtLink class="text-decoration-none"
                                  to="/team">contact page
                        </NuxtLink>
                        to reach out.
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