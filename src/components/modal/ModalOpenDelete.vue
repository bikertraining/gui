<template>
    <button class="btn btn-danger"
            data-bs-target="#deleteModal"
            data-bs-toggle="modal"
            type="button">
        <span class="pe-2">
            <font-awesome-icon :icon="['fa-solid', 'trash-alt']"/>
        </span> Delete
    </button>

    <div id="deleteModal"
         aria-hidden="true"
         aria-labelledby="deleteModalLabel"
         class="modal fade"
         tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="deleteModalLabel"
                        class="modal-title">
                        <span class="pe-2">
                            <font-awesome-icon :icon="['fa-solid', 'exclamation-triangle']"
                                               class="text-danger"/>
                        </span> Warning
                    </h5>

                    <button aria-label="Close"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            type="button"/>
                </div>

                <div class="modal-body">
                    {{ messageAlert }}
                </div>

                <div class="modal-footer">
                    <button class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            type="button">
                        <span class="pe-2">
                            <font-awesome-icon :icon="['fa-solid', 'window-close']"/>
                        </span> Cancel
                    </button>

                    <button class="btn btn-danger"
                            data-bs-dismiss="modal"
                            type="button"
                            @click="modalDelete();">
                        <span class="pe-2">
                            <font-awesome-icon :icon="['fa-solid', 'trash-alt']"/>
                        </span> Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ModalOpenDelete",
    props: {
        delete: {
            type: Function,
            required: true
        },
        messageAlert: {
            type: String,
            required: true
        },
        messageError: {
            type: Object,
            required: false,
        },
        messageSuccess: {
            type: String,
            required: true
        },
        params: {
            type: Object,
            required: false
        },
        redirect: {
            type: String,
            required: true
        }
    },
    methods: {
        modalDelete() {
            const can_delete = this.delete(this.params);

            const msg = can_delete.then(function (result: boolean) {
                return result;
            });

            msg.then((value: boolean) => {
                if (value) {
                    this.$emitter.emit('alert', {
                        display: true,
                        message: (this.messageError) ? this.messageError[0] : '',
                        type: 'danger'
                    });
                } else {
                    this.$emitter.emit('alert', {
                        display: true,
                        message: this.messageSuccess,
                        type: 'success'
                    });

                    this.$router.push({
                        name: this.redirect
                    });
                }
            });
        }
    }
});
</script>