<script lang="ts"
        setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Remedial Motorcycle Training',
    keywords: 'remedial motorcycle training, motorcycle, training, remedial',
    title: 'Remedial Motorcycle Training'
});

useHead({
    title: `${route.meta['title']}`,
    script: [
        {
            innerHTML: `
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://bikertraining.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "FAQ",
                        "item": "https://bikertraining.com/courses"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Kickstart",
                        "item": "https://bikertraining.com/courses/kickstart"
                      }
                  ]
                }
                    `,
            type: 'application/ld+json'
        }
    ]
});
</script>

<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h1 class="my-0 fw-normal fs-4">Kickstart Course</h1>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>The KickStart Course is for students that have not reached a level of comfort that will enable
                        them to continue with the course. True novice riders may find the slower pace helpful when
                        learning the initial control skills and gain greater comfort and familiarity with the
                        motorcycle. It is a 2-3 hour, first-touch experience with a motorcycle and not designed to teach
                        a person to ride. Also embedded in the experience is a self-assessment component to ensure a
                        person is aware of the risks and requirements for being a good, safe and responsible rider.
                    </li>

                    <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT</li>

                    <li class="mt-3">The KickStart Course can be given just about any time during the week and on most
                                     weekends.
                    </li>

                    <li class="mt-3">Novice riders that complete this course find they are quite comfortable with the
                                     motorcycle and better prepared for the BRC.
                    </li>

                    <li class="mt-3 fw-bold">This course is only available to those who have taken the BRC and were not
                                             comfortable enough to continue.
                    </li>
                </ul>

                <div class="row">
                    <div class="text-center">
                        <a class="text-decoration-none"
                           v-bind:href="'tel:' + getBusinessPhone(true)">
                            <button class="w-50 btn btn-lg btn-outline-success"
                                    type="button">
                                <svg class="bi">
                                    <use xlink:href="#phone"/>
                                </svg>

                                Call us at {{ getBusinessPhone(false) }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: -.125em;
    overflow: visible;
}

.card {
    border-color: #212529 !important;
}

.card-header {
    background-color: #212529;
    color: #FFFFFF;
}
</style>