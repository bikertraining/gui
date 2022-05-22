// Vue
import App from "@/App.vue";
import { createApp } from "vue";

// Vue Router
import router from "@/router";

// Bootstrap
import "bootstrap";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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

library.add(fas);

// Create Application
const application = createApp(App);

application.config.globalProperties.$emitter = emitter;

application.use(router);
application.use(vueCountryRegionSelect);
application.component('font-awesome-icon', FontAwesomeIcon);
application.mount('#app');
