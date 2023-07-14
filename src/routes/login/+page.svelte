<script>
  import Loader from '$lib/components/Loader.svelte'
  let sendButton = 'Enviar'
  let loginData = { username: null, password: null }
  const handleSubmit = () => {
    sendButton = 'Enviando...'
    console.table(loginData)
  }
</script>

<main class="flex">
  <section class="h-screen w-8/12 relative before:bg-black/30 before:absolute before:inset-0">
    <img class="object-cover aspect-video h-full" src="/login-bg.jpg" alt="" />
  </section>
  <section class="flex justify-center items-center w-[100vw] dark:bg-dark dark:text-white">
    <section>
      <section class="pb-10 flex flex-col gap-2">
        <h2 class="capitalize font-bold text-4xl">Inicia sesión</h2>
        <p class="font-medium text-base">Por favor, llena la información a continuación para acceder.</p>
      </section>
      <section>
        <form method="post" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-3">
          <section class="flex flex-col gap-y-5">
            <section class="user-input flex flex-col relative">
              <span class="ml-3 absolute top-3 select-none pointer-events-none transition text-gray-500">Nombre de usuario</span>
              <input bind:value={loginData.username} class="rounded-lg border border-gray-500 bg-transparent text-white w-full py-3 px-3 focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none transition-colors" type="text" autocomplete="off" required />
            </section>
            <section class="user-input flex flex-col relative">
              <span class="ml-3 absolute top-3 select-none pointer-events-none transition text-gray-500">Contraseña</span>
              <input bind:value={loginData.password} class="rounded-lg border border-gray-500 bg-transparent text-white w-full py-3 px-3 focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none transition-colors" type="password" required />
            </section>
          </section>
          {#if sendButton !== 'Enviando...'}
            <button class="bg-violet-500 text-white self-center w-4/12 mt-3 py-2 px-1 rounded-md flex justify-center">{sendButton}</button>
          {:else}
            <button disabled class="bg-violet-500 text-white self-center w-4/12 mt-3 py-2 px-1 rounded-md flex justify-evenly items-center"><Loader />{sendButton}</button>
          {/if}
        </form>
      </section>
    </section>
  </section>
</main>

<style lang="postcss">
  @media (prefers-color-scheme: dark) {
    .user-input:focus-within > span,
    .inputinput:valid > .user-input span {
      transform: translateY(-25px);
      background: #121212;
      color: white;
    }
  }

  @media (prefers-color-scheme: light) {
    .user-input:focus-within > span {
      transform: translateY(-25px);
      background: white;
      color: black;
    }
  }
</style>
