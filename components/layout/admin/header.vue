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
          to="/admin/schedule">
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
            class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/">
              <BootstrapIcon
                  class="me-1"
                  name="house-door-fill"/>

              Home
            </NuxtLink>
          </li>

          <li
              class="nav-item dropdown me-2">
            <a
                aria-expanded="false"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button">
              <BootstrapIcon
                  class="me-1"
                  name="calendar3"/>
              Schedule
            </a>

            <ul class="dropdown-menu">
              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/schedule">
                  <BootstrapIcon
                      class="me-1"
                      name="search"/>
                  Search
                </a>
              </li>

              <li>
                <hr
                    class="dropdown-divider"/>
              </li>

              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/schedule/create">
                  <BootstrapIcon
                      class="me-1"
                      name="plus-lg"/>
                  Create Schedule
                </a>
              </li>
            </ul>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/admin/price">
              <BootstrapIcon
                  class="me-1"
                  name="cash-coin"/>
              Prices
            </NuxtLink>
          </li>

          <li
              class="nav-item dropdown me-2">
            <a
                aria-expanded="false"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button">
              <BootstrapIcon
                  class="me-1"
                  name="person-arms-up"/>
              Coaches
            </a>

            <ul class="dropdown-menu">
              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/coach">
                  <BootstrapIcon
                      class="me-1"
                      name="search"/>
                  Active Coaches
                </a>
              </li>

              <li>
                <hr
                    class="dropdown-divider"/>
              </li>

              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/coach/create">
                  <BootstrapIcon
                      class="me-1"
                      name="plus-lg"/>
                  Create Coach
                </a>
              </li>

              <li>
                <hr
                    class="dropdown-divider"/>
              </li>

              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/coach/inactive">
                  <BootstrapIcon
                      class="me-1"
                      name="search"/>
                  InActive Coaches
                </a>
              </li>
            </ul>
          </li>

          <li
              class="nav-item dropdown me-2">
            <a
                aria-expanded="false"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button">
              <BootstrapIcon
                  class="me-1"
                  name="tags-fill"/>
              Coupons
            </a>

            <ul class="dropdown-menu">
              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/coupon">
                  <BootstrapIcon
                      class="me-1"
                      name="search"/>
                  Search
                </a>
              </li>

              <li>
                <hr
                    class="dropdown-divider"/>
              </li>

              <li>
                <a
                    v-on:click="close()"
                    class="dropdown-item"
                    href="/admin/coupon/create">
                  <BootstrapIcon
                      class="me-1"
                      name="plus-lg"/>
                  Create Coupon
                </a>
              </li>
            </ul>
          </li>

          <li
              class="nav-item me-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link"
                to="/admin/ecourse">
              <BootstrapIcon
                  class="me-1"
                  name="link-45deg"/>
              eCourse
            </NuxtLink>
          </li>
        </ul>

        <ul
            class="navbar-nav mb-2 mb-lg-0">
          <li
              class="nav-item me-2 mt-2">
            <NuxtLink
                v-on:click="close()"
                class="nav-link text-danger"
                to="/admin/auth/logout">
              <BootstrapIcon
                  class="me-1"
                  name="box-arrow-right"/>
              Logout
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