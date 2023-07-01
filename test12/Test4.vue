<script>
import lessons from "../../data/lessons.js";
export default {
   data() {
      return {
        lessons
      }
   }
}
</script>

<template>
  <div v-for="(lesson,key) in lessons" :key="key">
      <div>
         <div v-if="lesson.isDelete" style="background-color:lightcoral">{{lesson.name}}</div>
         <div v-else-if="lesson.score < 100" style="background-color:rebeccapurple">{{lesson.name}}</div>
         <div v-else>{{lesson.name}}</div>
      </div>
  </div>
  <br>
  <template v-for="(lesson,key) in lessons" :key="key">
      <div v-show="!lesson.isDelete" style="background-color:palevioletred">{{lesson.name}}</div>
  </template>
</template>

<style scoped lang="scss">

</style>