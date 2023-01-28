import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { createTRPCHandle } from "trpc-sveltekit";

export default createTRPCHandle({
	router,
	createContext,
	onError: ({ type, path, error }) =>
		console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
});
