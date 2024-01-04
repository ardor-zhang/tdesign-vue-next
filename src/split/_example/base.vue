<template>
  <div class="wrap">
    <t-split>
      <t-split-item :span="120">1</t-split-item>
      <t-split-item>2</t-split-item>
      <t-split-item>3</t-split-item>
    </t-split>
  </div>
</template>

<style>
.wrap {
  width: 700px;
  height: 400px;
  margin: 100px auto;
  border: 1px solid #ccc;
}

.t-split__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
