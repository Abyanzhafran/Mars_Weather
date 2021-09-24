 <!-- eslint-disable max-len  -->
<template>
  <q-page class="flex items-center justify-center">
    <div class="w-full flex justify-center">
      <header class="relative w-full h-screen flex items-end justify-center">
        <img
          src="~assets/mars_1.webp"
          class="absolute w-full h-screen object-cover"
        >

        <div
          class="absolute w-full h-screen"
          style="background: linear-gradient(0deg, rgba(196, 196, 196, 0) 20.51%, rgba(39, 39, 42, 0.7) 64.84%, #171717 100%);"
        />
        <!-- <div class="w-full mx-8">
          <q-input
            class="bg-white"
            bottom-slots
            v-model="text"
            label="Search"
            :dense="dense"
          >
            <template #append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer"
              />
              <q-icon name="search" />
            </template>
          </q-input>
        </div> -->
        <div class="w-full flex flex-col items-center justify-center gap-20 my-8 mx-4">
          <q-card class="rounded-card flex items-center justify-center text-white bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm w-48 h-48 rounded-full">
            <div>
              <div class="text-h6">
                Sol 679
              </div>
              <div class="text-subtitle2">
                Oct. 23
              </div>

              <q-separator
                class="mt-1 mb-3"
                color="white"
              />

              <div>
                <div>High: 11.2° F</div>
                <div>Low: -142° F</div>
              </div>
              <div />
            </div>
          </q-card>
          <div class="w-full object-contain">
            <q-scroll-area style="height:160px; width: 100%;">
              <div class="flex flex-nowrap justify-center gap-4">
                <q-card
                  v-for="n in 3"
                  :key="n"
                  class="my-card text-white bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm w-40"
                >
                  <q-card-section>
                    <div class="text-h6">
                      Sol 679
                    </div>
                    <div class="text-subtitle2">
                      Oct. 23
                    </div>

                    <q-separator
                      class="mt-1 mb-3"
                      color="white"
                    />

                    <div>
                      <div>High: 11.2° F</div>
                      <div>Low: -142° F</div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-scroll-area>
          </div>
        </div>
      </header>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Homepage',

  setup() {
    return {
      text: ref(''),
      dense: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    };
  },
});
</script>

<style lang="scss">
  .my-card {
    max-width: 250px;
    min-width: 180px;
  }

  .rounded-card {
    max-width: 300px;
    max-height: 300px;
  }
</style>
