<script setup lang="ts">
const {$event} = useNuxtApp();

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

      router.push({path: props.redirect});
    }
  });
};
</script>

<template>
  <button
      class="btn btn-danger"
      data-bs-target="#deleteModal"
      data-bs-toggle="modal"
      type="button">
    <BootstrapIcon
        name="trash3"/>
    Delete
  </button>

  <div
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
      class="modal fade"
      id="deleteModal"
      tabindex="-1">
    <div
        class="modal-dialog">
      <div
          class="modal-content">
        <div
            class="modal-header">
          <h1
              class="modal-title fs-5"
              id="deleteModalLabel">
            <BootstrapIcon
                class="text-danger"
                name="exclamation-triangle"/>
            Warning
          </h1>

          <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"/>
        </div>

        <div class="modal-body">
          {{ messageAlert }}
        </div>

        <div class="modal-footer">
          <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button">
            <BootstrapIcon
                name="x"/>
            Cancel
          </button>

          <button
              @click="modalDelete"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              type="button">
            <BootstrapIcon
                name="trash3"/>
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>