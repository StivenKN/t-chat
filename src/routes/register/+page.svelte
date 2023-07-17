<script>
  import Loader from '$lib/components/Loader.svelte'
  let sendButton = 'Regístrarse'
  let loginData = { username: null, password: null }
  const handleSubmit = () => {
    sendButton = 'Registrando...'
    console.table(loginData)
  }
</script>

<main class="grid min-h-screen dark:text-white place-items-center">
  <section class="py-6 px-7 rounded-md shadow-lg w-[25rem] shadow-black outline-1 outline-violet-600 bg-zinc-900">
    <h2 class="mb-8 text-2xl">Regístrate</h2>
    <form method="post" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-5">
      <section class="flex flex-col gap-y-5">
        <section class="relative flex flex-col">
          <input bind:value={loginData.username} class="w-10/12 px-3 py-3 mx-auto transition-colors bg-transparent border border-gray-500 rounded-lg sm:w-full username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="text" autocomplete="username" required />
          <span class="absolute px-1 ml-12 text-gray-500 transition pointer-events-none select-none sm:ml-3 top-3">Nombre de usuario</span>
        </section>
      </section>
      <section class="flex flex-col gap-y-5">
        <section class="relative flex flex-col">
          <input bind:value={loginData.password} class="w-10/12 px-3 py-3 mx-auto transition-colors bg-transparent border border-gray-500 rounded-lg sm:w-full username-input dark:text-white focus:shadow-sm dark:focus:shadow-violet-500/80 focus:shadow-gray-500/80 focus:outline-none" type="text" autocomplete="username" required />
          <span class="absolute px-1 ml-12 text-gray-500 transition pointer-events-none select-none sm:ml-3 top-3">Contraseña</span>
        </section>
      </section>
      <section class="flex items-center justify-around pt-3">
        <a href="/login" class="w-5/12 px-1 py-2 mt-3 text-center transition-colors border rounded-md border-violet-700 hover:bg-violet-700 hover:border-violet-700">Iniciar sesión</a>
        {#if sendButton !== 'Enviando...'}
          <button class="flex self-center justify-center w-5/12 px-1 py-2 mt-3 text-white transition-colors rounded-md bg-violet-700 hover:bg-violet-900">{sendButton}</button>
        {:else}
          <button disabled class="flex items-center self-center w-5/12 px-1 py-2 mt-3 text-white rounded-md bg-violet-900 justify-evenly"><Loader /> {sendButton}</button>
        {/if}
      </section>
    </form>
  </section>
</main>

<style lang="postcss">
  @media (prefers-color-scheme: dark) {
    main {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1366' height='667' preserveAspectRatio='none' viewBox='0 0 1366 667'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1366' height='667' x='0' y='0' fill='rgba(18%2c 18%2c 18%2c 1)'%3e%3c/rect%3e%3cpath d='M1220.71763426003-34.18526874485754L1060.417174721803-20.160795777266582 1074.4416476893937 140.13966376096067 1234.742107227621 126.11519079336973z' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M64.98574621143949 325.4990482151861L155.7991209645386 433.9359199524091 200.1084110289311 318.5062729413142z' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1195.742219336943 375.9580574031865L1078.997782341587 331.14406675021127 1034.1837916886118 447.8885037455673 1150.9282286839677 492.70249439854246z' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M648.3446759606925 586.2497179048698L811.619607100097 495.7449456989704 721.1148348941977 332.47001455956587 557.8399037547931 422.9747867654653z' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1112.477%2c174.496C1134.087%2c173.968%2c1149.572%2c156.666%2c1160.949%2c138.286C1173.184%2c118.519%2c1186.04%2c94.672%2c1174.308%2c74.602C1162.633%2c54.629%2c1135.524%2c53.348%2c1112.477%2c55.362C1093.323%2c57.036%2c1077.009%2c67.631%2c1066.904%2c83.988C1056.159%2c101.381%2c1050.524%2c122.5%2c1059.718%2c140.76C1069.78%2c160.743%2c1090.111%2c175.043%2c1112.477%2c174.496' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1345.688%2c646.98C1379.323%2c647.334%2c1409.906%2c630.701%2c1428.908%2c602.946C1451.161%2c570.443%2c1468.23%2c529.597%2c1449.934%2c494.713C1430.717%2c458.073%2c1387.061%2c444.042%2c1345.688%2c444.276C1304.778%2c444.507%2c1262.088%2c459.454%2c1243.466%2c495.881C1225.966%2c530.113%2c1243.909%2c569.381%2c1265.452%2c601.224C1283.943%2c628.556%2c1312.691%2c646.632%2c1345.688%2c646.98' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1175.302%2c726.624C1222.538%2c727.182%2c1277.508%2c724.494%2c1300.131%2c683.024C1322.28%2c642.423%2c1290.409%2c597.902%2c1267.416%2c557.772C1244.216%2c517.281%2c1221.968%2c465.219%2c1175.302%2c465.161C1128.593%2c465.103%2c1105.532%2c516.744%2c1082.791%2c557.543C1060.944%2c596.738%2c1033.938%2c640.771%2c1055.476%2c680.136C1077.517%2c720.419%2c1129.386%2c726.082%2c1175.302%2c726.624' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M913.395%2c304.43C967.036%2c300.857%2c1016.075%2c275.433%2c1043.822%2c229.387C1072.541%2c181.728%2c1076.925%2c123.782%2c1052.326%2c73.872C1024.424%2c17.262%2c976.465%2c-32.922%2c913.395%2c-35.239C847.033%2c-37.677%2c788.836%2c5.491%2c755.583%2c62.972C722.276%2c120.546%2c712.556%2c193.353%2c748.945%2c249.03C782.863%2c300.926%2c851.535%2c308.551%2c913.395%2c304.43' fill='rgba(62%2c 22%2c 119%2c 0.47)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1366' height='667' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    }
  }
  @media (prefers-color-scheme: dark) {
    .username-input:focus ~ span,
    .username-input:valid ~ span {
      transform: translateY(-25px);
      background: #18181b;
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
