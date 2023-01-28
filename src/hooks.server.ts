import { sequence } from "@sveltejs/kit/hooks";
import trpcHandle from "$lib/trpc/handle";
import authHandle from "$lib/auth/handle";

export const handle = sequence(authHandle, trpcHandle);
