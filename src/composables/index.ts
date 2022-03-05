import processor from "@/composables/processor";
import session from "@/composables/session";
import { useAuth } from "@/composables/auth";
import { usePageLoading } from "@/composables/pageLoading";
import { useSidebar } from "@/composables/sidebar";

import { useAdminPrice, useAdminSchedule } from "@/composables/admin";

import { useClientContact, useClientRegister, useClientSchedule } from "@/composables/client";

export {
    processor,
    session,
    useAdminPrice,
    useAdminSchedule,
    useAuth,
    useClientContact,
    useClientRegister,
    useClientSchedule,
    usePageLoading,
    useSidebar
};