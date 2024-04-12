<script lang="ts" context="module">
  export type ToastData = {
    title: string
    description: string
    color: string
  }

  const {
    elements: { content, title, description, close },
    helpers,
    states: { toasts },
    actions: { portal },
  } = createToaster<ToastData>()

  export const addToast = helpers.addToast
</script>

<script lang="ts">
  import { createToaster, melt } from "@melt-ui/svelte"
  import Cross from "../Icons/Cross.svelte"
  import { fade } from "svelte/transition"
</script>

<div use:portal class="toasterWrapper">
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      class="toaster"
      transition:fade={{ delay: 250, duration: 300 }}
    >
      <div>
        <h3 use:melt={$title(id)} class="toasterTitle">
          {data.title}
          <span class="circle" style={`background-color: ${data.color}`} />
        </h3>
        <div use:melt={$description(id)}>
          {data.description}
        </div>
      </div>
      <button
        use:melt={$close(id)}
        aria-label="close notification"
        class="toasterClose"
      >
        <Cross />
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
  .toasterWrapper {
    position: fixed;
    z-index: 199999;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }

  .toaster {
    position: relative;
    padding: 20px;
    padding-top: 0;
    background: #262626;
    border-radius: 4px;
    margin-right: 16px;
    margin-top: 16px;
  }

  .circle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px transparent solid;
    display: inline-block;
    margin-left: 8px;
  }

  .toasterTitle {
    display: flex;
    align-items: center;
  }

  .toasterClose {
    display: grid;
    position: absolute;
    top: 22.4px;
    right: 16px;
    place-items: center;
    border-radius: 9999px;
  }
</style>
