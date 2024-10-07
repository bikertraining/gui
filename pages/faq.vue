<script setup lang="ts">
const {formObj, getPrices} = useClientPrice();

const route = useRoute();

const {getBusinessEmail, getBusinessPhone, getGuiUrl} = useUtils();

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
                        "name": "FAQ",
                        "item": "${getGuiUrl()}/faq"
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
          How do I register for the course?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse1">
        <div
            class="accordion-body">
          There are several ways to register for the course.

          You can
          <NuxtLink class="text-decoration-none"
                    to="/schedule">register online
          </NuxtLink>

          <span
              class="fw-bold">
            OR
          </span>

          call us at

          <NuxtLink
              v-bind:href="'tel:' + getBusinessPhone(true)"
              class="text-decoration-none">
            {{ getBusinessPhone(false) }}
          </NuxtLink>
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
          Where are the classes taught?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse2">
        <div
            class="accordion-body">
          Pensacola Harley-Davidson<br> 6385 Pensacola Blvd<br> Pensacola, Florida<br> 32505
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
          How much are the courses?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse3">
        <div
            class="accordion-body">
          All the courses we offer and prices can be found on our

          <NuxtLink
              class="text-decoration-none"
              to="/courses">
            courses
          </NuxtLink>

          page.
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
          Can I talk to someone about the courses you offer?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse4">
        <div
            class="accordion-body">
          Of course, call us at

          <NuxtLink
              v-bind:href="'tel:' + getBusinessPhone(true)"
              class="text-decoration-none">
            {{ getBusinessPhone(false) }}
          </NuxtLink>
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
          Will the class be cancelled if it rains?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse6">
        <div
            class="accordion-body">
          No, we will ride in the rain just as you would in real-life.
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
          How old do I have to be?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse7">
        <div
            class="accordion-body">
          Students must be 16 years of age and have at least a learners permit. If you have a learners permit, you can
          take the class but you will not be allowed to get your motorcycle endorsement at the DMV unless you've had the
          learners permit for at least one year.
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
          What type of motorcycle do you use?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse8">
        <div
            class="accordion-body">
          We use the Harley-Davidson Street 500 motorcycle the Harley-Davidson x350RA. Each motorcycle is lightweight
          and easy to operate.
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
          I'm concerned about my height and/or weight.
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse9">
        <div
            class="accordion-body">
          We have several different seats available for all sizes of students. If you would like to try having a seat on
          one of our training bikes prior to the class please give us a call to setup a date and time.
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
          Can I use my own motorcycle in the course?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse10">
        <div
            class="accordion-body">
          For the Basic RiderCourse and Kickstart course, students will use our training motorcycles. For the 3-Wheeled
          Basic RiderCourse and the Skilled RiderCourse students can use their own motorcycles.
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
          I don't have a 3-Wheeled motorcycle, can one be provided?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse11">
        <div
            class="accordion-body">
          There are limited options available. Please call us for the latest information.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse12"
            class="accordion-button collapsed"
            data-bs-target="#collapse12"
            data-bs-toggle="collapse"
            type="button">
          What defines a 3-Wheeled motorcycle?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse12">
        <div
            class="accordion-body">
          A 3-Wheel motorcycle

          <span
              class="fw-bold">
            must
          </span>

          meet the following requirements:

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              Three-track wheel orientation (leaves three separate tracks during straight-line operation). Dual wheels
              may be in the front or rear.
            </li>

            <li
                class="list-group-item border-0">
              Motorcycle-based conversion or design. Handlebar steering Motorcycle-type controls arranged with the
              standard convention (convenience alterations such as a single brake pedal or lever control, automatic
              clutch, or automatic transmission are allowed), Saddle seating, Seating causes rider/passenger to straddle
              vehicle. If designed for a passenger, passenger must be seated behind operator.
            </li>

            <li
                class="list-group-item border-0">
              Turning diameter of the vehicle at its widest point must be less than 40 feet.
            </li>

            <li
                class="list-group-item border-0">
              The vehicle must meet all applicable federal/state on-road vehicle standards.
            </li>

            <li
                class="list-group-item border-0">
              Under no circumstances will vehicles with the following designs characteristics be allowed in the 3WBRC:
              Automotive hybrids or automotive conversions, vehicles with automotive controls or seating, vehicles with
              rear or front mounted engines (engines must be mounted midframe below the rider), vehicles with enclosed
              or semi-enclosed riding compartments, any other significant departure from the standard motorcycle design.
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
            aria-controls="collapse13"
            class="accordion-button collapsed"
            data-bs-target="#collapse13"
            data-bs-toggle="collapse"
            type="button">
          How do you get the motorcycle endorsement on my drivers license after the class?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse13">
        <div
            class="accordion-body">
          At the end of the class you will receive a completion card. Take this card along with your current Florida
          Drivers License and about $40 to your Tax Collector or DMV office and they will issue you a brand new drivers
          license with the endorsement.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse14"
            class="accordion-button collapsed"
            data-bs-target="#collapse14"
            data-bs-toggle="collapse"
            type="button">
          What is the refund policy?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse14">
        <div
            class="accordion-body">
          When enrolling, you are purchasing a seat in the class of your choice. Once purchased, that seat is set aside
          for only your use. Please select the date that will ensure you can attend each day for the times indicated.
          You must attend all class/range sessions.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse15"
            class="accordion-button collapsed"
            data-bs-target="#collapse15"
            data-bs-toggle="collapse"
            type="button">
          What is the cancellation policy?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse15">
        <div
            class="accordion-body">
          All fees are nonrefundable unless students call

          <NuxtLink
              v-bind:href="'tel:' + getBusinessPhone(true)"
              class="text-decoration-none">
            {{ getBusinessPhone(false) }}
          </NuxtLink>

          or email

          <NuxtLink
              v-bind:href="'mailto:' + getBusinessEmail(true)"
              class="text-decoration-none">
            {{ getBusinessEmail(false) }}
          </NuxtLink>

          6 days prior to their scheduled class to obtain a partial refund. A partial refund is full tuition minus a
          processing fee.

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              Basic RiderCourse ${{ formObj['brc']['process_amount'] }}
            </li>

            <li
                class="list-group-item border-0">
              3-Wheel RiderCourse ${{ formObj['3wbrc']['process_amount'] }}
            </li>

            <li
                class="list-group-item border-0">
              Skilled RiderCourse ${{ formObj['src']['process_amount'] }}
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
            aria-controls="collapse16"
            class="accordion-button collapsed"
            data-bs-target="#collapse16"
            data-bs-toggle="collapse"
            type="button">
          How can I postpone my class?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse16">
        <div
            class="accordion-body">
          There is no charge for postponement provided the student calls or emails at least 48 hours prior to their
          scheduled class. If less than 48 hours prior or if a student does not complete the entire class, a seat in a
          subsequent class may be purchased:

          <ul
              class="list-group list-group-numbered">
            <li
                class="list-group-item border-0">
              Basic RiderCourse ${{ formObj['brc']['re_amount'] }}
            </li>

            <li
                class="list-group-item border-0">
              3-Wheel RiderCourse ${{ formObj['3wbrc']['re_amount'] }}
            </li>

            <li
                class="list-group-item border-0">
              Skilled RiderCourse ${{ formObj['src']['re_amount'] }}
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
            aria-controls="collapse17"
            class="accordion-button collapsed"
            data-bs-target="#collapse17"
            data-bs-toggle="collapse"
            type="button">
          What if I am late or miss part of the class?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse17">
        <div
            class="accordion-body">
          Learning to ride a motorcycle requires skill progression. This progression begins with small tasks and builds
          to larger, more complex tasks. It is critical that students arrive on time. Preferably, come early! If you
          miss a class or range session, you will not be allowed to complete the course and will have to purchase
          another seat in a later class.
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse18"
            class="accordion-button collapsed"
            data-bs-target="#collapse18"
            data-bs-toggle="collapse"
            type="button">
          Is there any pre-course material?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse18">
        <div
            class="accordion-body">
          The ePackage-1 eCourse is a requirement prior to taking the BRC or 3-wheel BRC.

          <div
              class="mt-3">
            Once you have registered for a class we will email you a unique link to complete the 5-hour
            online ePackage-1 eCourse.
          </div>

          <div
              class="mt-3">
            After successful completion of the eCourse you'll receive a certificate which is good for 30 days. If the
            certificate is older than 30 days you must retake the online eCourse to earn a new certificate.
          </div>
        </div>
      </div>
    </div>

    <div
        class="accordion-item">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse19"
            class="accordion-button collapsed"
            data-bs-target="#collapse19"
            data-bs-toggle="collapse"
            type="button">
          What is the ePackage-1 eCourse?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse19">
        <div
            class="accordion-body">
          The MSF ePackage-1 eCourse is a highly interactive 5-hour online program that provides riders of all skill
          levels with the basics of motorcycling. With integrated graphics, photos and video to illustrate the lessons,
          and allows you to control the pace of your learning. Please note that the ePackage-1 eCourse alone is NOT
          accepted as a license waiver by any state's department of motor vehicles, or as a license to ride a motorcycle
          or as a learner’s permit.
        </div>
      </div>
    </div>

    <div
        class="accordion-item border-bottom">
      <h2
          class="accordion-header border-bottom border-white">
        <button
            aria-expanded="false"
            aria-controls="collapse20"
            class="accordion-button collapsed"
            data-bs-target="#collapse20"
            data-bs-toggle="collapse"
            type="button">
          How long is the endorsement certificate we receive good for?
        </button>
      </h2>

      <div
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaq"
          id="collapse20">
        <div
            class="accordion-body">
          After successful completion of the class, you'll receive a certificate which is only valid for

          <span
              class="fw-bold">
            one year
          </span>

          from the date printed. If you do not get the motorcycle endorsement on your drivers license within that one
          year, you must retake the class to earn another certificate. Most states adhere to this but they may have
          other requirements or change their policies without notice. Please check with your local DMV office for
          official information.
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