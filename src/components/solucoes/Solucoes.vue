<template>
  <div class="area-container">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-carousel
          id="Carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="white"
          img-width="100%"
          img-height="678"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="100%"
                height="678"
                :src="require('../../assets/img/slider1.jpg')"
                alt="Gestor de Pedidos e Delivery para bares e restaurante"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="100%"
                height="678"
                :src="require('../../assets/img/slider2.jpg')"
                alt="Eset segurança"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="100%"
                height="678"
                :src="require('../../assets/img/slider3.jpg')"
                alt="Eset segurança"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
        <!-- <b-col sm="12" lg="6" xl="4" class="test"> 1 de 3 </b-col>
        <b-col sm="12" lg="6" xl="4" class="test"> 2 de 3 </b-col>
        <b-col sm="12" lg="6" xl="4" class="test"> 3 de 3 </b-col>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Solucoes",
  data: () => ({
    slide: 0,
    sliding: null,
  }),
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.area-container {
  width: 100%;
  height: 100%;
  background-color: none;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 50%;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
</style>
