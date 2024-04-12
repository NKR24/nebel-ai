<script lang="ts">
  import type { Snippet } from "svelte"
  import { fade } from "svelte/transition"

  type Props = {
    isOpen: boolean
    onClickAway?: () => void
    children: Snippet
  }

  const { isOpen, onClickAway, children }: Props = $props()
</script>

{#if isOpen}
  <div class="modal" transition:fade={{ duration: 150 }}>
    {@render children()}
  </div>
  <button
    class="veil"
    onclick={onClickAway}
    transition:fade={{ duration: 150 }}
  />
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    z-index: 99999;
    background-color: #0f151c;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 32px 0 #3a2b5d;
  }

  .veil {
    position: fixed;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
    $blur: 32px;
    backdrop-filter: blur($blur);
    -webkit-backdrop-filter: blur($blur);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>
