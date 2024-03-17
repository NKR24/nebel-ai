<script lang="ts">
  import type { Snippet } from "svelte"
  import Children from "../Children/Children.svelte"

  type Props = {
    title: string
    maxWidth?: string
    children?: Snippet
  }

  const { title, maxWidth = "1920px", children }: Props = $props()
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main style={`--maxWidth: ${maxWidth}`}>
  <Children {children} />
</main>

<style>
  main {
    max-width: var(--maxWidth);
    margin: auto;
    --verticalOffset: 230px;
    --horizontalOffset: 150px;

    @media (max-width: 768px) {
      --verticalOffset: 40px;
      --horizontalOffset: 20px;
    }

    padding: var(--verticalOffset) var(--horizontalOffset) 0
      var(--horizontalOffset);
  }
</style>
