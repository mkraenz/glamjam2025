<script lang="ts">
	let page = $state('intro');
</script>

{#snippet intro()}
	<p>What's your name?</p>
	<p>My name is <span style="display: inline;"><input style="max-width: 320px" /></span>.</p>
	<button onclick={() => (page = 'next')}>Continue</button>
{/snippet}

{#snippet next()}
	<p>What's your favorite color?</p>
	<p>
		The bestest color is <span style="display: inline;"><input style="max-width: 320px" /></span>.
	</p>
	<button onclick={() => (page = 'intro')}>Continue</button>
{/snippet}

{#if page === 'intro'}
	{@render intro()}
{/if}

{#if page === 'next'}
	{@render next()}
{/if}
