<script lang="ts">
  type Props = {
    offset?: Offset | string
  }

  enum Offset {
    Small = "4px",
    Normal = "8px",
    Big = "16px",
  }

  const { offset = Offset.Normal }: Props = $props()
</script>

<div style={`--offset: ${offset}`} />

<style>
  div {
    height: var(--offset);
  }
</style>
