<script lang="ts">
  import type { Snippet } from "svelte"

  const { isOpen, children } = $props<{
    isOpen: boolean
    children: Snippet
  }>()
</script>

{#if isOpen}
  <div class="modal">
    {@render children()}
  </div>
{/if}

<style>
	.modal {
		position: absolute;
    z-index: 99999;
		background-color: #0f151c;
		padding: 16px;
		border-radius: 6px;
    box-shadow: 0 0 32px 0 #3a2b5d;
	}
</style>
