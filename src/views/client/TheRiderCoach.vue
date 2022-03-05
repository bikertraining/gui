<template>
    <div id="top"
         class="row pt-3">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder">
                    <font-awesome-icon :icon="['fas', 'users']"
                                       class="me-1"/>
                    Rider Coaches
                </div>

                <div class="card-body">
                    <p>Our goal is your success!</p>

                    <p>These are the dedicated professionals that are passionate about motorcycling and about the
                        individual learning of the students they have the privilege to coach. These RiderCoaches are
                        nationally certified by the Motorcycle Safety Foundation (MSF) and recognized by the Florida
                        Rider Training Program (FRTP).</p>

                    <p>We cannot guarantee you will pass the course, but we will guarantee the best opportunity for
                        success! Be ready to have a blast with these patient and enthusiastic professionals!</p>
                </div>

                <div class="row row-cols-1 row-cols-md-3 g-0 text-center">
                    <div v-for="coach in coaches"
                         v-bind:key="coach"
                         class="col">
                        <figure :data-bs-target="'#' + coach.modal"
                                class="figure"
                                data-bs-toggle="modal">
                            <img :alt="coach.name"
                                 :src="coach.img"
                                 class="rounded img-thumbnail img-responsive">

                            <figcaption class="figure-caption text-end">{{ coach.name }}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="coach in coaches"
             :id="coach.modal"
             v-bind:key="coach"
             :aria-labelledby="coach.modal + 'Label'"
             aria-hidden="true"
             class="modal fade"
             tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 :id="coach.modal + 'Label'"
                            class="modal-title">{{ coach.name }}</h5>

                        <button aria-label="Close"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                type="button"></button>
                    </div>

                    <div class="modal-body">
                        <img :alt="coach.name"
                             :src="coach.img"
                             class="figure-img img-fluid rounded">
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary"
                                data-bs-dismiss="modal"
                                type="button">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheRiderCoach",
    setup() {
        const coaches = [
            {
                img: 'img/ridercoach/RC_Ken.jpg',
                modal: 'coach1',
                name: 'Ken Grant',
            },
            {
                img: 'img/ridercoach/RC_Sammie.jpg',
                modal: 'coach2',
                name: 'Sammie Taunton',
            },
            {
                img: 'img/ridercoach/RC_Becki.jpg',
                modal: 'coach3',
                name: 'Becki Fleener',
            },
            {
                img: 'img/ridercoach/RC_Jim.jpg',
                modal: 'coach4',
                name: 'Jim Wells',
            },
            {
                img: 'img/ridercoach/RC_Tim.jpg',
                modal: 'coach5',
                name: 'Tim Poppell',
            },
            {
                img: 'img/ridercoach/RC_Eileen.jpg',
                modal: 'coach6',
                name: 'Eileen Grier',
            },
            {
                img: 'img/ridercoach/RC_Anne.jpg',
                modal: 'coach7',
                name: 'Anne Roussel',
            },
            {
                img: 'img/ridercoach/RC_Jeff.jpg',
                modal: 'coach8',
                name: 'Jeff Grant',
            },
            {
                img: 'img/ridercoach/RC_Mark.jpg',
                modal: 'coach9',
                name: 'Mark Piveral',
            },
            {
                img: 'img/ridercoach/RC_Calvin.jpg',
                modal: 'coach10',
                name: 'Calvin Rich',
            },
            {
                img: 'img/ridercoach/RC_Dennis.jpg',
                modal: 'coach11',
                name: 'Dennis Decaprio',
            },
            {
                img: 'img/ridercoach/RC_Steve.jpg',
                modal: 'coach12',
                name: 'Steve Kelly',
            }
        ];

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            coaches
        };
    }
});
</script>

<style lang="css">
.img-responsive {
    width: auto;
    height: 300px;
}
</style>