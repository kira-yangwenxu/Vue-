<script>
    export default {
       data() {
          return {
             name : '白子',
             isset: true
          }
       }
    }
</script>

<template>
  <div class="ClassComponent">
      <div class="yilvbo">伊吕波</div>
      <div class="baizi" v-bind:class="{'heizi': isset}">{{name}}</div>
  </div>
</template>

<style scoped lang="scss">
.ClassComponent {
   .yilvbo {
      color: blueviolet;
   }
   .heizi {
      background-color: #242424;
   }
}
</style>