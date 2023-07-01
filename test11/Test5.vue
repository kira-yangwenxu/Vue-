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
    <div class="ClassList">
         <div v-for="(lesson,key) in lessons"  :key="key">
           <span :class="{'is-delete' : lesson.isDelete}">{{lesson.name}}</span>
           <button @click="lesson.isDelete = !lesson.isDelete">{{lesson.isDelete ? '取消': '删除'}}</button>
         </div>
    </div>
</template>

<style scoped lang="scss">
    .ClassList{
      div{
        display: flex;
        justify-content:space-between;
      }
      span{
        line-height: 2.5;
        &.is-delete {
           text-decoration:line-through;
        }
      }
    }
</style>