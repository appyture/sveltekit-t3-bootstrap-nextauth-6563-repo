<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client";
	import { page } from "$app/stores";
	import { trpc } from "$lib/trpc/client";
	let greeting = "Press the button to load some data";
	let loading = false;
	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).test.greeting.query();
		loading = false;
	};
</script>
<style lang="postcss">
  button {
    @apply inline-flex items-center rounded border border-transparent bg-orange-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2
  }
</style>
<div class="flex flex-col justify-top items-left pt-8 h-screen w-full bg-blue-700 text-gray-50">
	<div class="pl-8 mb-8">
		{#if $page.data.session}
			<div class="flex items-center">
				{#if $page.data.session.user?.image}
					<img
						alt="avatar"
						src={$page.data.session.user.image}
						class="rounded-full w-12 border-white border-2"
					/>
					<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
				{/if}
				<span class="ml-3">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? "User"}</strong>
				</span>
				<button on:click={() => signOut()} class="ml-4 border-white border-2 rounded p-1"
					>Sign out</button
				>
			</div>
		{:else}
			<div class="flex items-center">
				<span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
					<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</span>
				<button on:click={() => signIn("github")} class="ml-4 border-white border-2 rounded p-1"
					>Sign in with GitHub</button
				>
			</div>
		{/if}
		<pre>{JSON.stringify($page.data, null, 2)}</pre>
	</div>
	<div class="flex flex-1 pl-8 pt-2  bg-blue-200 text-gray-900">
		<span
			><strong>Load data using tRPC</strong>
			<button on:click|preventDefault={loadData} class="ml-4 border-blue-700 border-2 rounded p-1"
				>Load</button
			>
      <p>{greeting}</p>
		</span>
	</div>
</div>

