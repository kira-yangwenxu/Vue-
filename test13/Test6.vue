<script>
import lessons from "../../data/lessons.js";
export default {
   data() {
      return {
        lessons,
        orderType:'asc',
        orderBy:'score'
      }
   },
  computed:{
      lessonLists() {
         return this.lessons.sort((a,b)=>{
           return this.orderType == 'asc' ? a[this.orderBy] - b[this.orderby] : b[this.orderBy] - a[this.orderBy]
         })
      }
  }
}
</script>

<template>
  <div>
    <button @click="orderBy='score'; orderType='asc'" :class="{'order-type':orderBy ==='score'}">分数</button>
    <button @click="orderBy='comments'; orderType='asc'" :class="{'order-type':orderBy ==='comments'}">评论数</button>
    <button @click="orderType='asc'" :class="{'order-type':orderType === 'asc'}">升序</button>
    <button @click="orderType='desc'" :class="{'order-type':orderType === 'desc'}">降序</button>
    <template v-for="lesson in lessonLists" :key="lesson.id">
      <div>{{lesson.name}} ---分数:{{lesson.score}} --评论数:{{lesson.comments}}</div>
    </template>
  </div>
</template>

<style scoped lang="scss">
 .order-type {
   background-color: palevioletred;
   color: #f9f9f9;
 }
</style>