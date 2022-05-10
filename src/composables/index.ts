import { useAuth } from "@/composables/auth";
import { usePageLoading } from "@/composables/pageLoading";
import processor from "@/composables/processor";
import session from "@/composables/session";

import { useAdminCoach, useAdminPrice, useAdminSchedule } from "@/composables/admin";
import { useClientContact, useClientPayment, useClientRegister, useClientSchedule } from "@/composables/client";

export {
    processor,
    session,
    useAdminCoach,
    useAdminPrice,
    useAdminSchedule,
    useAuth,
    useClientContact,
    useClientPayment,
    useClientRegister,
    useClientSchedule,
    usePageLoading
};