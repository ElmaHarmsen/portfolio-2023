<template>
  <svg class="stitchy-line line-container-left">
    <line x1="0" y1="0" x2="0" y2="1000" stroke-color="#a33600"></line>
  </svg>
  <svg class="stitchy-line line-container-right">
    <line x1="0" y1="0" x2="0" y2="1000" stroke-color="#a33600"></line>
  </svg>
</template>

<style scoped>
.stitchy-line {
  position: fixed;
  z-index: 2;
  width: 1px;
  height: 100vh;
}

.line-container-left {
  left: 15px;
}

.line-container-right {
  right: 15px;
}

line {
  stroke: var(--rusty-brown);
  stroke-dasharray: 5;
  stroke-width: 2px;
}
</style>
