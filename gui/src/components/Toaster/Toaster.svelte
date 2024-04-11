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
</script>

<div use:portal class="toasterWrapper">
  {#each $toasts as { id, data } (id)}
    <div use:melt={$content(id)} class="toaster">
      <div>
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
    </div>
  {/each}
</div>

<style lang="scss">
  .toasterWrapper {
    position: fixed;
    z-index: 199999;
    background: #262626;
    border-radius: 10px;
    right: 0;
    bottom: 0;
    margin: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
  }

  .toaster {
    padding: 20px;
    padding-top: 0;
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
    top: 1.4rem;
    right: 1rem;
    place-items: center;
    border-radius: 9999px;
  }
</style>
