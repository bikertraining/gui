<script setup lang="ts">
const {status} = useAuth();

const {getBusinessPhone} = useUtils();

const close = () => {
  (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
};
</script>

<template>
  <nav
      class="navbar bg-dark navbar-expand-lg d-print-none"
      data-bs-theme="dark">
    <div
        class="container-fluid">
      <NuxtLink
          v-on:click="close()"
          to="/">
        <img
            alt="Biker Training LLC"
            class="inline-block img-fluid"
            height="100"
            loading="eager"
            src="/img/bikertraining/logo_color_white.webp"
            width="255"/>
      </NuxtLink>

      <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          class="navbar-toggler"
          type="button">
        <span
            class="navbar-toggler-icon"/>
      </button>

      <div
          class="collapse navbar-collapse ms-5"
          id="navbarSupportedContent">
        <ul
            class="navbar-nav me-auto mb-lg-0">
          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/schedule">
              <BootstrapIcon
                  class="me-1"
                  name="calendar3"/>

              Schedule
            </NuxtLink>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/courses">
              <BootstrapIcon
                  class="me-1"
                  name="mortarboard-fill"/>

              Courses
            </NuxtLink>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/faq">
              <BootstrapIcon
                  class="me-1"
                  name="patch-question"/>

              FAQs
            </NuxtLink>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/contact">
              <BootstrapIcon
                  class="me-1"
                  name="envelope-at-fill"/>

              Contact Us
            </NuxtLink>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/team">
              <BootstrapIcon
                  class="me-1"
                  name="people-fill"/>

              Join Our Team
            </NuxtLink>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-bind:href="'tel:' + getBusinessPhone(true)"
                v-on:click="close()"
                class="nav-link">
              <BootstrapIcon
                  class="me-1"
                  name="telephone-fill"/>

              {{ getBusinessPhone(false) }}
            </NuxtLink>
          </li>

          <li
              v-if="status == 'authenticated'"
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link text-danger"
                to="/admin/schedule">
              <BootstrapIcon
                  class="me-1"
                  name="incognito"/>

              Admin
            </NuxtLink>
          </li>
        </ul>

        <ul
            class="navbar-nav">
          <li
              class="nav-item me-3">
            <NuxtLink
                v-on:click="close()"
                target="_blank"
                to="https://www.facebook.com/bikertraining">
              <img
                  alt="Facebook"
                  class="img-fluid me-3 mt-3"
                  height="25"
                  loading="eager"
                  src="/img/fb/Facebook_Logo_Primary.webp"
                  width="25"/>
            </NuxtLink>
          </li>

          <li
              class="nav-item me-3">
            <NuxtLink
                v-on:click="close()"
                target="_blank"
                to="https://www.instagram.com/bikertraining">
              <img
                  alt="Instagram"
                  class="img-fluid me-3 mt-3"
                  height="25"
                  loading="eager"
                  src="/img/ig/Instagram_Glyph_Gradient.webp"
                  width="25"/>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: #F8F9FA;
  font-weight: bolder;
}

.nav-link:hover {
  color: #FE541F;
}
</style>