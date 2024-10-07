<script setup lang="ts">
const route = useRoute();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'RiderCoach Frequently Asked Questions',
  keywords: 'ridercoach frequently asked questions, ridercoach, rider coach, coach, instructor, faq',
  title: 'RiderCoach FAQ'
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
                        "item": "${getGuiUrl()}"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Join Our Team",
                        "item": "${getGuiUrl()}/team"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Rider Course FAQ",
                        "item": "${getGuiUrl()}/team/faq"
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
  <div
      class="accordion mt-3"
      id="accordionFaq">
    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse1"
            class="accordion-button collapsed"
            data-bs-target="#collapse1"
            data-bs-toggle="collapse"
            type="button">
          What are the requirements to become a RiderCoach?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse1">
        <div
            class="accordion-body">
          <p>
            To become a RiderCoach:
          </p>

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              Be at least 18 years of age.
            </li>

            <li
                class="list-group-item border-0">
              Have a motorcycle license or endorsement.
            </li>

            <li
                class="list-group-item border-0">
              Have a good driving record.
            </li>

            <li
                class="list-group-item border-0">
              Have no criminal history.
            </li>

            <li
                class="list-group-item border-0">
              Ride a registered and insured motorcycle frequently on the street.
            </li>

            <li
                class="list-group-item border-0">
              Good communication skills.
            </li>

            <li
                class="list-group-item border-0">
              Sincere desire to help others.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse2"
            class="accordion-button collapsed"
            data-bs-target="#collapse2"
            data-bs-toggle="collapse"
            type="button">
          RiderCoach Prep Course (RCP)
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse2">
        <div
            class="accordion-body">
          All RiderCoach candidates must complete an RCP (RiderCoach Prep Course). These are sponsored by
          the State of Florida and are held several times of the year. The RCP is normally a week long for
          8 hours each day. The last 2 days of class you'll teach a class with real students. After
          completion of the RCP you'll be certified to teach the MSF (Motorcycle Safety Foundation) BRC
          (Basic RiderCourse).
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse3"
            class="accordion-button collapsed"
            data-bs-target="#collapse3"
            data-bs-toggle="collapse"
            type="button">
          What information will I be required to know?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse3">
        <div
            class="accordion-body">
          <p>
            All training to prepare you for the RCP will be done by Biker Training LLC
          </p>

          <p>
            Here is a list of what you can expect to learn:
          </p>

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              How to setup the range; cone placement, motorcycle positioning for the start of class, setup rest area for
              students.
            </li>

            <li
                class="list-group-item border-0">
              Motorcycle demonstrations. This shows the proper path of travel, speed, and ease of use.
            </li>

            <li
                class="list-group-item border-0">
              How to setup the classroom; Reading material for students and computer for presentation materials.
            </li>

            <li
                class="list-group-item border-0">
              Classroom facilitation.
            </li>

            <li
                class="list-group-item border-0">
              Dealer activities to help students find the proper gear and motorcycle fit.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse4"
            class="accordion-button collapsed"
            data-bs-target="#collapse4"
            data-bs-toggle="collapse"
            type="button">
          What is Demo Boot Camp?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse4">
        <div
            class="accordion-body">
          <p>
            Demo Boot Camp is a 2 day course that all RiderCoach Candidates must complete before being allowed to ride
            demonstrations in front of students.
          </p>

          <p>
            This will prepare you to learn the proper path of travel, proper speed, and smoothness of how a
            demonstration should look like.
          </p>

          <p>
            We will also cover how to properly setup the range for each exercise with proper cone placement and how to
            coordinate the color of cones to help students with the proper path of travel.
          </p>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse5"
            class="accordion-button collapsed"
            data-bs-target="#collapse5"
            data-bs-toggle="collapse"
            type="button">
          What type of equipment am I required to bring?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse5">
        <div
            class="accordion-body">
          You will be responsible to bring the following:

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              <span
                  class="fw-bold">
                Over the ankle sturdy footwear.
              </span>

              It is required to wear shoes that fully cover your ankle. Shoes or boots with a large heel or steel toe
              make it increasingly difficult to shift, especially for women.
            </li>

            <li
                class="list-group-item border-0">
              Long pants made out of sturdy materials. No spandex or sweatpants.
            </li>

            <li
                class="list-group-item border-0">
              Long sleeve shirt or jacket. Light colors work best when it's hot outside.
            </li>

            <li
                class="list-group-item border-0">
              <span
                  class="fw-bold">
                Full fingered
              </span>

              gloves.
            </li>

            <li
                class="list-group-item border-0">
              <span
                  class="fw-bold">
                D.O.T
              </span>

              helmet. Can be any type of helmet so long as it meets the D.O.T standards.
            </li>

            <li
                class="list-group-item border-0">
              Eye protection. Prescription glasses and sun glasses are considered eye protection for the purpose of this
              course. A helmet visor also meets the requirements.
            </li>

            <li
                class="list-group-item border-0">
              As it may rain, it's recommended to have motorcycle rain gear or consider bringing a change of clothes.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse6"
            class="accordion-button collapsed"
            data-bs-target="#collapse6"
            data-bs-toggle="collapse"
            type="button">
          I have a job already but would like to do this part time
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse6">
        <div
            class="accordion-body">
          Have a job already? No problem! Most RiderCoaches have normal jobs already and we can work around your
          schedule.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse7"
            class="accordion-button collapsed"
            data-bs-target="#collapse7"
            data-bs-toggle="collapse"
            type="button">
          How long does it normally take to become a RiderCoach?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse7">
        <div
            class="accordion-body">
          This depends on how much time you are willing to put into the curriculum. However, the typical candidate will
          normally take 3 to 6 months.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse8"
            class="accordion-button collapsed"
            data-bs-target="#collapse8"
            data-bs-toggle="collapse"
            type="button">
          Are there any costs involved?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse8">
        <div
            class="accordion-body">
          All training materials are paid for by Biker Training LLC. You may need to travel to attend an RCP which can
          last from 7 to 10 days depending on the schedule. Travel costs are your obligation and not Biker Training LLC.
          This includes such things like hotel, fuel, and food.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse9"
            class="accordion-button collapsed"
            data-bs-target="#collapse9"
            data-bs-toggle="collapse"
            type="button">
          I'm already a certified MSF RiderCoach
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse9">
        <div
            class="accordion-body">
          <p>
            If you are certified by another state we can help you with the required paperwork to get you
            into the FRTP program (Florida Rider Training Program). This is a simple process!
          </p>

          <p>
            FRTP paperwork is required to teach in the State of Florida as well as attending an FRTP sponsored update.
          </p>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse10"
            class="accordion-button collapsed"
            data-bs-target="#collapse10"
            data-bs-toggle="collapse"
            type="button">
          Do we get paid?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse10">
        <div
            class="accordion-body">
          Yes, of course!
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse11"
            class="accordion-button collapsed"
            data-bs-target="#collapse11"
            data-bs-toggle="collapse"
            type="button">
          I have more questions!
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse11">
        <div
            class="accordion-body">
          We have answers! Use the

          <NuxtLink
              class="text-decoration-none"
              to="/team">
            contact page
          </NuxtLink>

          to reach out.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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