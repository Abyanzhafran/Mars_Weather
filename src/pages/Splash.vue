<!-- eslint-disable max-len -->
<template>
  <q-page class="flex items-center justify-center">
    <div class="w-full flex justify-center">
      <header class="relative w-full h-screen flex items-center justify-center">
        <img
          src="~assets/mars_1.webp"
          class="absolute w-full h-screen object-cover"
        >

        <div
          class="absolute w-full h-screen"
          style="background: linear-gradient(0deg, rgba(196, 196, 196, 0) 20.51%, rgba(39, 39, 42, 0.7) 64.84%, #171717 100%);"
        />
        <div class="w-full flex items-center justify-center relative mx-4">
          <q-card class="flex items-center justify-center text-white bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm w-full h-full">
            <div class="p-6 flex flex-col gap-4">
              <span class="text-6xl font-bold text-white">Latest Weather at Elysium Planitia</span>

              <q-separator color="white" />

              <span class="text-white text-xl">Elysium Planitia, located in the Elysium and Aeolis quadrangles, is a broad plain that straddles the equator of Mars, centered at 3.0°N 154.7°E.[1] It lies to the south of the volcanic province of Elysium,
              </span>
              <div>
                <q-btn
                  to="/home"
                  class="text-white hover:bg-white w-20"
                  outline
                  label="Go"
                />
              </div>
            </div>
          </q-card>
        </div>
      </header>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

  },
});
</script>

<style lang="scss">
  .my-card {
    min-width: 180px;
  }
</style>
