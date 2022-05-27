// Vue
import App from "@/App.vue";
import { createApp } from "vue";

// Vue Router
import router from "@/router";

// Bootstrap
import "bootstrap";

// Country / State Select
import vueCountryRegionSelect from "vue3-country-region-select";

// Mitt
import mitt, { Emitter } from "mitt";

type Events = {
    alert: string;
    handler: {
        display: boolean;
        message: string;
        type: string;
    };
};

const emitter: Emitter<Events> = mitt<Events>();

// Create Application
const application = createApp(App);

application.config.globalProperties.$emitter = emitter;

application.use(router);
application.use(vueCountryRegionSelect);
application.mount('#app');
