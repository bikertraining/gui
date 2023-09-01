<script lang="ts"
        setup>
import { ref } from "vue";

const props = defineProps({
    alt: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: false
    },
    loading: {
        type: String,
        required: false
    },
    src: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: false
    }
});

const images: any = {
    'bikertraining/logo_bike_only.webp': [
        'https://s6.imgcdn.dev/vPVqn.webp',
        'bikertraining/logo_bike_only.webp'
    ],
    'bikertraining/logo_color_white.webp': [
        'https://s6.imgcdn.dev/vPRrO.webp',
        'bikertraining/logo_color_white.webp'
    ],
    'bikertraining/logo_llc_color.webp': [
        'https://s6.imgcdn.dev/vPtug.webp',
        'bikertraining/logo_llc_color.webp'
    ],
    'brp/99.webp': [
        'https://s6.imgcdn.dev/vPW1v.webp',
        'brp/99.webp'
    ],
    'brp/199.webp': [
        'https://s6.imgcdn.dev/vPddN.webp',
        'brp/199.webp'
    ],
    'frtp/logo.webp': [
        'https://s6.imgcdn.dev/vPLhq.webp',
        'frtp/logo.webp'
    ],
    'le/logo.webp': [
        'https://s6.imgcdn.dev/vPbPB.webp',
        'le/logo.webp'
    ],
    'msf/logo.webp': [
        'https://s6.imgcdn.dev/vPe9u.webp',
        'msf/logo.webp'
    ],
    'phd/logo.webp': [
        'https://s6.imgcdn.dev/vPm8L.webp',
        'phd/logo.webp'
    ],
    'phd/hdsrc.png': [
        'https://s6.imgcdn.dev/AkLyK.webp',
        'phd/hdsrc.webp'
    ],
    'cc_types.webp': [
        'https://s6.imgcdn.dev/vPFka.webp',
        'cc_types.webp'
    ]
};

const image = ref(images[props.src][0]);

const getImage = async () => {
    const response = await fetch(`${images[props.src][0]}`);

    if (response.ok) {
        image.value = images[props.src][0];
    } else {
        image.value = `/img/${images[props.src][1]}`;
    }

    return image.value;
};

onMounted(async () => {
    await getImage();
});

useHead({
    link: [
        { rel: 'preload', as: 'image', href: image.value }
    ]
});
</script>

<template>
    <img :alt="props.alt"
         :class="props.class"
         :height="props.height"
         :loading="props.loading"
         :src="image"
         :width="props.width"/>
</template>

<style scoped>

</style>