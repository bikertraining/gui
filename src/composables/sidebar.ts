import { reactive } from "vue";

interface UseSidebarInterface {
    globalSidebar: {
        toggle: boolean;
    };
    resizeSidebar: (value: boolean) => void;
    toggleSidebar: () => void;
}

const globalSidebar = reactive({
    toggle: false
});

export const useSidebar = (): UseSidebarInterface => {
    const resizeSidebar = (value: boolean) => {
        globalSidebar.toggle = value;
    };

    const toggleSidebar = () => {
        globalSidebar.toggle = !globalSidebar.toggle;
    };

    return {
        globalSidebar,
        resizeSidebar,
        toggleSidebar
    };
};