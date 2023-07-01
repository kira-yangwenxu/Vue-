<script>
export default {
    data() {
       return {
          title : '白子',
          isset : false
       }
    },
}
</script>

<template>
   <div class="ClassComponent">
     <div class="yilvbo">伊吕波</div>
     <a class="baizi" v-bind:class="{'heizi': isset}">{{title}}</a>
   </div>
</template>

<style  lang="scss" scoped>
.ClassComponent{
  .yilvbo {
    color: mediumpurple;
  }
  .heizi{
    background-color:black;
  }
}

</style>