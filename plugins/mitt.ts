import mitt, { Emitter } from "mitt";

type Events = {
    alert: string;
    handler: {
        display: boolean;
        message: string;
        type: string;
    };
};

export default defineNuxtPlugin(() => {
    const emitter: Emitter<Events> = mitt<Events>();

    return {
        provide: {
            event: emitter.emit, // Will emit an event
            listen: emitter.on // Will register a listener for an event
        }
    };
});