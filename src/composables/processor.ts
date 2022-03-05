import { session } from "@/composables";
import router from "@/router";
import { defineComponent } from "vue";

const catchError = (error: any) => {
    return {
        error: true,
        errors: error.response.data,
        response: error.response,
        status: error.response.status
    };
};

const catchMe = (error: any) => {
    if (error.response) {
        if (error.response.status === 403) {
            // Permission Denied
            return router.push({
                name: 'error:403'
            });
        } else if (error.response.status === 404) {
            // Page Not Found
            return router.push({
                name: 'error:404'
            });
        } else if (error.response.status === 500) {
            // Internal Server Error
            return router.push({
                name: 'error:500'
            });
        }
    } else if (error.request) {
        // Timeout
        return router.push({
            name: 'error:408'
        });
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error);
    }
};

export default defineComponent({
    async delete(url: string, conf = {}) {
        try {
            const response = await session.delete(url, conf);

            return response.data;
        } catch (error) {
            await catchMe(error);

            return catchError(error);
        }
    },
    async get(url: string, conf = {}) {
        try {
            const response = await session.get(url, conf);

            return response.data;
        } catch (error) {
            // @ts-ignore
            if (conf['override']) {
                return false;
            }

            await catchMe(error);
        }
    },
    async options(url: string, conf = {}) {
        try {
            const response = await session.options(url, conf);

            return response.data;
        } catch (error) {
            await catchMe(error);
        }
    },
    async patch(url: string, data = {}, conf = {}) {
        try {
            const response = await session.patch(url, data, conf);

            return response.data;
        } catch (error) {
            await catchMe(error);

            return catchError(error);
        }
    },
    async post(url: string, data = {}, conf = {}) {
        try {
            const response = await session.post(url, data, conf);

            return response.data;
        } catch (error) {
            await catchMe(error);

            return catchError(error);
        }
    }
});