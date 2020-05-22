<template>
  <div class="left-nav-container">
    <div class="catelogue-container">
      <a
        href="#"
        :class="index === checkedCatelogueIdx ? 'checked-catelogue-item' : ''"
        v-for="(item, index) in catelogues"
        :key="item.name"
        @click="toggleCatelogue(index)"
      >
        <div class="catelogue-item">
          {{item.name}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api"
export default {
  setup() {
    const state = reactive({
      checkedCatelogueIdx: 0,
      catelogues: [
        { name: 'remotejs' },
        { name: 'react2rn' },
      ],
    })
    const toggleCatelogue = (tapIndex) => {
      if (tapIndex !== state.checkedCatelogueIdx) {
        state.checkedCatelogueIdx = tapIndex
      }
    }
    return {
      ...toRefs(state),
      toggleCatelogue,
    }
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: #111;
}
.catelogue-container{
  margin-top: 150px;
}
.catelogue-item{
  box-shadow: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 20px 10px 40px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}
.catelogue-item:hover{
  color: green;
  border-right: 2px solid green;
}
.checked-catelogue-item{
  color: green;
}
</style>