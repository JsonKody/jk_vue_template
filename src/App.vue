<script setup lang="ts">
import TheMenu from "./components/TheMenu.vue";
</script>

<template>
  <div>
    <TheMenu class="rd" />
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive include="Games">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss"></style>
