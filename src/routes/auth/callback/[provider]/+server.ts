import type { RequestHandler } from '@sveltejs/kit';
import { decode } from "@auth/core/jwt";
export const GET: RequestHandler = async ({ request, cookies }) => {
		const cookie = cookies.get("next-auth.session-token") as string;
		// console.log(cookie);
		const decoded = await decode({
			token: cookie,
			secret: "rja"
		});
		// console.log(`jwt:[${JSON.stringify(decoded)}]`);

	return new Response(String("hi"));
};
