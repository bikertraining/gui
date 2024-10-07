<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {status} = useAuth();

const {submitLogin} = useAuthorization();

const route = useRoute();

const router = useRouter();

const schema = object({
  username: string().required(),
  password: string().required().min(5)
});

if (status.value === 'authenticated') {
  router.push({path: '/admin/schedule'});
}

definePageMeta({
  auth: false,
  description: 'Employee Login',
  layout: 'authorization',
  title: 'Login'
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="back">
    <div
        class="div-center border border-dark">
      <div
          class="content">
        <div
            class="d-flex justify-content-center">
          <NuxtLink
              to="/">
            <img
                alt="Login"
                height="100"
                loading="eager"
                src="/img/bikertraining/logo_llc_color.webp"
                width="255"/>
          </NuxtLink>
        </div>

        <Form
            :validation-schema="schema"
            @submit="submitLogin">
          <FormText
              :required="true"
              label="Username"
              name="username"/>

          <FormText
              :required="true"
              label="Password"
              name="password"
              type="password"/>

          <button
              class="w-100 btn btn-outline-success"
              type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.content {
  display: table-cell;
  vertical-align: middle;
}

.div-center {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}
</style>