<script>
    export default {
        data() {
           return {
              title:"白子",
              isset:true
           }
        }
    }
</script>

<template>
    <div class="ClassComponent">
       <div class="yilvbo">伊吕波</div>
       <a class="baizi" v-bind:class="{'heizi': isset}">{{title}}</a>
    </div>
</template>

<style scoped lang="scss">
   .ClassComponent {
     .yilvbo {
        color: blueviolet;
     }
     .heizi {
        background-color:black;
     }
   }
</style>