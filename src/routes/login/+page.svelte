<script>
  import Loader from '$lib/components/Loader.svelte'
  let sendButton = 'Enviar'
  let loginData = { username: null, password: null }
  const handleSubmit = () => {
    sendButton = 'Enviando...'
    console.table(loginData)
  }
</script>

<main class="flex min-h-screen">
  <section class="relative hidden w-8/12 h-screen lg:block before:bg-black/30 before:absolute before:inset-0">
    <img class="object-cover h-full aspect-video" src="/login-bg.jpg" alt="" />
  </section>
  <section class="flex justify-center items-center w-[100vw] dark:bg-dark dark:text-white">
    <section>
      <section class="flex flex-col gap-2 pb-10 text-center sm:text-start">
        <h2 class="text-4xl font-bold capitalize">Iniciar sesión</h2>
        <p class="w-full mx-auto text-base font-medium">Por favor, llena la información a continuación para acceder.</p>
      </section>
      <section>
        <form method="post" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-3">
          <section class="flex flex-col gap-y-5">
            <section class="relative flex flex-col">
              <input bind:value={loginData.username} class="w-10/12 px-3 py-3 mx-auto transition-colors bg-transparent border border-gray-500 rounded-lg sm:w-full username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="text" autocomplete="username" required />
              <span class="absolute ml-12 text-gray-500 transition pointer-events-none select-none sm:ml-3 top-3">Nombre de usuario</span>
            </section>
            <section class="relative flex flex-col user-input">
              <input bind:value={loginData.password} class="w-10/12 px-3 py-3 mx-auto transition-colors bg-transparent border border-gray-500 rounded-lg sm:w-full username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="password" required />
              <span class="absolute ml-12 text-gray-500 transition pointer-events-none select-none sm:ml-3 top-3">Contraseña</span>
            </section>
          </section>
          <section class="flex items-center justify-around">
            {#if sendButton !== 'Enviando...'}
              <button class="flex self-center justify-center w-4/12 px-1 py-2 mt-3 text-white transition-colors rounded-md bg-violet-700 hover:bg-violet-900">{sendButton}</button>
            {:else}
              <button disabled class="flex items-center self-center w-4/12 px-1 py-2 mt-3 text-white rounded-md bg-violet-900 justify-evenly"><Loader />{sendButton}</button>
            {/if}
            <a href="/register" class="w-4/12 px-1 py-2 mt-3 text-center transition-colors border rounded-md border-violet-700 hover:bg-violet-700 hover:border-violet-700">Regístrate</a>
          </section>
        </form>
      </section>
    </section>
  </section>
</main>

<style lang="postcss">
  /* main > section:nth-child(2) {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='820' height='667' preserveAspectRatio='none' viewBox='0 0 820 667'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1078%26quot%3b)' fill='none'%3e%3cpath d='M207.718%2c508.303C245.901%2c507.181%2c289.078%2c505.356%2c308.44%2c472.428C327.967%2c439.219%2c311.437%2c398.866%2c291.42%2c365.951C272.394%2c334.665%2c244.3%2c308.402%2c207.718%2c306.804C168.435%2c305.088%2c131.717%2c325.056%2c110.313%2c358.04C86.693%2c394.438%2c72.588%2c442.257%2c96.19%2c478.667C118.616%2c513.262%2c166.508%2c509.514%2c207.718%2c508.303' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M321.867%2c409.896C370.725%2c407.644%2c410.824%2c374.239%2c433.787%2c331.055C455.287%2c290.621%2c452.764%2c243.674%2c431.941%2c202.887C408.735%2c157.431%2c372.842%2c114.347%2c321.867%2c111.829C267.349%2c109.136%2c218.221%2c143.571%2c191.193%2c190.993C164.432%2c237.947%2c162.829%2c295.861%2c190.531%2c342.266C217.584%2c387.584%2c269.145%2c412.326%2c321.867%2c409.896' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M746.2765062247549 390.1455432053538L795.2328961205328 219.41432196451075 575.5452849839119 341.1891533095759z' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M551.944486731104-34.61963970150335L577.1920285990375 145.02595527021785 756.8376235707588 119.77841340228434 731.5900817028253-59.867181569436866z' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M731.3131720008283 520.5796526915774L614.1957253364175 491.3789936166471 584.9950662614872 608.496440281058 702.112512925898 637.6970993559883z' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M262.626%2c358.664C324.621%2c356.903%2c367.412%2c301.371%2c394.218%2c245.443C417.148%2c197.603%2c412.526%2c144.125%2c388.004%2c97.081C361.094%2c45.455%2c320.832%2c-5.776%2c262.626%2c-7.01C202.937%2c-8.276%2c156.771%2c39.422%2c127.687%2c91.561C99.48%2c142.127%2c91.31%2c201.624%2c117.419%2c253.304C146.321%2c310.513%2c198.557%2c360.484%2c262.626%2c358.664' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M389.92917446875543 126.80172377953512L403.36532454057055 195.92472359067148 500.3317492213675 141.2089985773806z' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M243.16772079436726 532.3644324182642L386.7958867698511 629.2428536271855 483.6743079787724 485.6146876517017 340.0461420032886 388.73626644278033z' fill='rgba(62%2c 22%2c 119%2c 0.1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1078'%3e%3crect width='820' height='667' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  } */
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
