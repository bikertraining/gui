<script lang="ts"
        setup>
const { $event } = useNuxtApp();

const props = defineProps({
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
});

const router = useRouter();

const modalDelete = () => {
    const can_delete = props.delete(props.params);

    const msg = can_delete.then((result: boolean) => {
        return result;
    });

    msg.then((value: boolean) => {
        if (!value) {
            // @ts-ignore
            $event('alert', {
                display: true,
                message: (props.messageError) ? props.messageError[0] : '',
                type: 'danger'
            });
        } else {
            // @ts-ignore
            $event('alert', {
                display: true,
                message: props.messageSuccess,
                type: 'success'
            });

            router.push({ path: props.redirect });
        }
    });
};
</script>

<template>
    <button class="btn btn-danger"
            data-bs-target="#deleteModal"
            data-bs-toggle="modal"
            type="button">
        <span class="pe-2">
            <svg aria-hidden="true"
                 class="text-white"
                 data-icon="trash-can"
                 data-prefix="fa-solid"
                 focusable="false"
                 role="img"
                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                 viewBox="0 0 448 512"
                 xmlns="http://www.w3.org/2000/svg">
                <path class=""
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                      fill="currentColor"/>
            </svg>
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
                            <svg aria-hidden="true"
                                 class="text-danger"
                                 data-icon="exclamation-triangle"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                                      fill="currentColor"/>
                            </svg>
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
                            <svg aria-hidden="true"
                                 data-icon="rectangle-xmark"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
                                      fill="currentColor"/>
                            </svg>
                        </span> Cancel
                    </button>

                    <button class="btn btn-danger"
                            data-bs-dismiss="modal"
                            type="button"
                            @click="modalDelete">
                        <span class="pe-2">
                            <svg aria-hidden="true"
                                 class="text-white"
                                 data-icon="trash-can"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 448 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                                      fill="currentColor"/>
                            </svg>
                        </span> Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>