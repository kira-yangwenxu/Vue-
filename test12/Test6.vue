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
        <div v-if="lesson.isDelete" style="background-color:deeppink">{{lesson.name}}</div>
        <div v-else-if="lesson.score < 100" style="background-color:darkblue">{{lesson.name}}</div>
        <template v-else>{{lesson.name}}</template>
    </div>
  </div>
  <br>
  <template v-for:="(lesson,key) in lessons" :key="key">
    <div v-show="!lesson.isDelete" style="background-color:#535bf2">{{lesson.name}}</div>
  </template>
</template>

<style scoped lang="scss">

</style>