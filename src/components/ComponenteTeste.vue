<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>