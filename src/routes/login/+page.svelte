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
  <section class="relative w-8/12 h-screen before:bg-black/30 before:absolute before:inset-0">
    <img class="object-cover h-full aspect-video" src="/login-bg.jpg" alt="" />
  </section>
  <section class="flex justify-center items-center w-[100vw] dark:bg-dark dark:text-white">
    <section>
      <section class="flex flex-col gap-2 pb-10">
        <h2 class="text-4xl font-bold capitalize">Iniciar sesión</h2>
        <p class="text-base font-medium">Por favor, llena la información a continuación para acceder.</p>
      </section>
      <section>
        <form method="post" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-3">
          <section class="flex flex-col gap-y-5">
            <section class="relative flex flex-col">
              <input bind:value={loginData.username} class="w-full px-3 py-3 transition-colors bg-transparent border border-gray-500 rounded-lg username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="text" autocomplete="username" required />
              <span class="absolute ml-3 text-gray-500 transition pointer-events-none select-none top-3">Nombre de usuario</span>
            </section>
            <section class="relative flex flex-col user-input">
              <input bind:value={loginData.password} class="w-full px-3 py-3 transition-colors bg-transparent border border-gray-500 rounded-lg username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="password" required />
              <span class="absolute ml-3 text-gray-500 transition pointer-events-none select-none top-3">Contraseña</span>
            </section>
          </section>
          {#if sendButton !== 'Enviando...'}
            <button class="flex self-center justify-center w-4/12 px-1 py-2 mt-3 text-white rounded-md bg-violet-500">{sendButton}</button>
          {:else}
            <button disabled class="flex items-center self-center w-4/12 px-1 py-2 mt-3 text-white rounded-md bg-violet-500 justify-evenly"><Loader />{sendButton}</button>
          {/if}
        </form>
      </section>
    </section>
  </section>
</main>

<style lang="postcss">
  @media (prefers-color-scheme: dark) {
    .username-input:focus ~ span,
    .username-input:valid ~ span {
      transform: translateY(-25px);
      background: #121212;
      color: white;
    }
  }

  @media (prefers-color-scheme: light) {
    .username-input:focus ~ span,
    .username-input:valid ~ span {
      transform: translateY(-25px);
      background: white;
      color: black;
    }
  }
</style>
