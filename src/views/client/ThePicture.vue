<template>
    <div id="top"
         class="row pt-3" style="height: 50vh !important;">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm w-75">
                <div class="card-header fw-bolder">
                    <img src="img/icon/pictures.png" alt="Class Pictures" class="me-1"/>
                    Class Pictures
                </div>

                <div class="card-body">
                    Coming Soon!
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "ThePicture",
    setup() {
        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });
    }
});
</script>