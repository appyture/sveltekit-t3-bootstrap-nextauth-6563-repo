import delay from "delay";
import { t } from "$lib/trpc/t";

export const test = t.router({
	greeting: t.procedure.query(async (ctx) => {
		console.log(JSON.stringify(ctx, null, 2));
		debugger;
		await delay(500); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	})
});
