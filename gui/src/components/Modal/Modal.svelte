<script lang="ts">
  import type { Snippet } from "svelte"

  const { isOpen, onClickAway, children } = $props<{
    isOpen: boolean
    onClickAway?: () => void
    children: Snippet
  }>()
</script>

{#if isOpen}
  <div class="modal">
    {@render children()}
  </div>
  <button class="veil" onclick={onClickAway} />
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

  .veil {
    position: absolute;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s ease-in-out;
  }
</style>
