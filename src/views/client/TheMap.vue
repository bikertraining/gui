<template>
    <div id="top"
         class="row pt-3">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder">
                    <img src="img/icon/map.png" alt="Map" class="me-1"/>
                    Map
                </div>

                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <img alt="Penscola Harley-Davidson"
                             class="d-none d-lg-flex"
                             height="100"
                             src="img/phd.svg"/>

                        <img alt="Penscola Harley-Davidson"
                             class="d-lg-none"
                             height="75"
                             src="img/phd.svg"/>
                    </div>

                    <p class="text-center fw-bolder"
                       style="color: #3C4B64;">6385 Pensacola Blvd<br>Pensacola, Florida<br>32505</p>

                    <div class="ratio ratio-21x9">
                        <iframe allowfullscreen=""
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.4832386303056!2d-87.25632568454179!3d30.479071804863704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890bfc8ff1757f1%3A0x3fbb458075146bc2!2s6385%20Pensacola%20Blvd%2C%20Pensacola%2C%20FL%2032505!5e0!3m2!1sen!2sus!4v1644870012208!5m2!1sen!2sus"
                                style="border:0;"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheMap",
    setup() {
        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });
    }
});
</script>