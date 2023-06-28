<script lang="ts"
        setup>
import { object, string } from "yup";

const { status } = useAuth();

const { submitLogin } = useAuthorization();

const route = useRoute();

const router = useRouter();

const schema = object({
    username: string().required(),
    password: string().required().min(5)
});

if (status.value === 'authenticated') {
    router.push({ path: '/admin/schedule' });
}

definePageMeta({
    auth: false,
    description: 'Employee Login',
    keywords: 'login, employee login',
    layout: 'authorization',
    title: 'Login'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="back">
        <div class="div-center border border-dark">
            <div class="content">
                <div class="d-flex justify-content-center">
                    <NuxtLink to="/">
                        <img alt="Login"
                             class="mb-3"
                             height="100"
                             src="/img/svg/bt_logo_llc_color.svg"/>
                    </NuxtLink>
                </div>

                <Form :validation-schema="schema"
                      @submit="submitLogin">
                    <FormText :required="true"
                              label="Username"
                              name="username"/>

                    <FormText :required="true"
                              label="Password"
                              name="password"
                              type="password"/>

                    <button class="btn btn-outline-success w-100 mt-2"
                            type="submit">Login
                    </button>
                </form>

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

div.content {
    display: table-cell;
    vertical-align: middle;
}
</style>