<script setup lang="ts">
import Container from '@/components/base/Container.vue';
useHead({
  title: 'Renta de Laser',
});
</script>
<template>
  <Container class="z-10">
    <img id="lsm" class="opacity-90" src="/img/main.jpg" />
    <div class="px-xs py-md text-center flex items-center flex-col">
      <div class="max-w-[750px]">
        <h1 class="text-h1">
          <strong>Ideas Creativas</strong>
          {{ ' ' }}
          <span class="font-extralight">para tus eventos</span>
        </h1>
        <p class="text-body1 mt-sm">
          Somos una empresa dedicada a la renta de equipos laser para cualquier
          tipo de evento o proyecto, nuestros mas de 10 años de experiencia y
          muchos clientes nos respaldan.
        </p>
      </div>
    </div>
    <div
      id="about"
      class="flex flex-col items-center text-center px-xs py-md sm:bg-[url('/img/laser_red.png')] bg-no-repeat bg-right-top bg-[length:28%]"
    >
      <div class="flex flex-col sm:flex-row gap-md max-w-5xl items-center">
        <div class="w-full max-w-[250px] sm:max-w-sm opacity-90">
          <img src="/img/tech.jpg" />
        </div>
        <div class="w-full">
          <h2 class="text-h1 font-bold">
            Contamos con la tecnologia necesaria
          </h2>
          <p class="text-body1 mt-sm">
            No solo la experciencia es necesaria para lograr grandes cosas en
            este medio, parte indispensable es la tecnolgia, asi mismo contamos
            con equipo novedoso como Kvant y Pangolin, ADJ,Advatek, HK,
            L'Acoustics para lograr una armonia perfecta.
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-[url('/img/pexels.jpg')] bg-cover bg-center h-[200px] sm:h-[350px] opacity-90"
    />
    <div class="px-xs py-md text-center flex items-center flex-col">
      <div class="max-w-[750px]">
        <h1 class="text-h1 font-bold">Proyecciones en exterior</h1>
        <p class="text-body1 mt-sm">
          Un mensaje , un logo o cualquier imagen que quieras proyectar ya sea
          para promocionar o vender un producto es posible realizarlo con Laser
        </p>
      </div>
    </div>
    <div class="sm:hidden flex justify-center">
      <n-carousel draggable class="max-w-[500px]">
        <img class="w-full opacity-90" src="/img/gallsm1.jpg" />
        <img class="w-full opacity-90" src="/img/gallsm2.jpg" />
        <img class="w-full opacity-90" src="/img/gallsm3.jpg" />
        <img class="w-full opacity-90" src="/img/gallsm4.jpg" />
        <img class="w-full opacity-90" src="/img/gallsm5.jpg" />
      </n-carousel>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3">
      <img class="w-full opacity-90 hidden sm:block" src="/img/gallsm1.jpg" />
      <h2 class="text-h3 text-center flex items-center px-xs py-md">
        CREA UN SIN FIN DE EXPERIENCIAS INMERSIVAS PARA TUS EVENTOS
      </h2>
      <img class="w-full opacity-90 hidden sm:block" src="/img/gallsm2.jpg" />
      <img class="w-full opacity-90 hidden sm:block" src="/img/gallsm3.jpg" />
      <img class="w-full opacity-90 hidden sm:block" src="/img/gallsm4.jpg" />
      <img class="w-full opacity-90 hidden sm:block" src="/img/gallsm5.jpg" />
    </div>
    <div
      class="flex flex-col md:flex-row gap-md items-center justify-center pb-md pt-0 sm:pt-md px-md"
    >
      <div class="max-w-xl w-full">
        <img src="/img/store.jpg" />
      </div>
      <div class="flex justify-center w-full">
        <div class="max-w-xs text-center">
          <h3 class="text-primary-400 font-bold text-h4">Tienda en linea</h3>
          <p class="text-body1 my-xs">
            Contamos con una variedad de equipos Laser y otros accesorios
          </p>
          <NuxtLink href="https://lasershowmexico.wixsite.com/iluminacionlaser">
            <n-button size="large"> Visitar </n-button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div id="contact" class="px-md py-md font-bold space-y-xs relative">
      <div class="w-full">
        <p class="text-body1">ESTAMOS EMOCIONADOS POR ESCUCHARTE!</p>
        <p class="text-h2 text-error-500">Contactanos</p>
        <p class="text-subtitle3 max-w-sm sm:max-w-lg">
          Te responderemos lo mas pronto posible, en caso de no contestar
          llamada, porfavor dejanos un mensaje en WhatsApp, Estamos en CDMX pero
          vamos a cualquier parte de la republica mexicana.
        </p>
        <p class="text-subtitle2">
          Telefono: <br />
          Cel. 55-43-75-56-92
        </p>
        <p class="text-subtitle2">
          Correo: <br />
          Lasershowmexico@gmail.com
        </p>
      </div>
      <div
        class="bg-[url('/img/lasers.png')] bg-no-repeat bg-cover h-full absolute inset-0 opacity-30"
      />
    </div>
  </Container>
</template>
