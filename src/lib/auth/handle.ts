import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";

export default SvelteKitAuth({
	callbacks: {
		signIn: async ({ account, profile, user }) => {
			return true;
		},
		session: async ({ session }) => {
			return session;
		}
	},
	//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});
