<script setup lang="ts">
  const click = ()=>{
    // 有一些逻辑，只在生产环境下执行，开发环境下不执行对应的逻辑
    if(DEBUG){
      // 到了prod环境会被移除
      const a = 1
      const b = 2
      console.log(a+b)
    }
  }

</script>

<template>
  <div @click="click">
    jzsp
  </div>
</template>

<style scoped>
</style>
