<script lang="ts" setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { target } from './jsons'
import SelectSource from './components/SelectSource.vue'

const SelectSourceRef = ref<InstanceType<typeof SelectSource>>()
interface Mapping { target: string, source: string }

const mapping = ref(new Map())

const list = computed(() => Array.from(mapping.value))

function select(map: Mapping) {
  mapping.value.set(map.target, map.source)
}
</script>

<template>
  <div class="relative h-100vh w-100vw dark:bg-dark5">
    <button icon-btn absolute right-10px top-10px @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
    <div p-20px>
      <VueJsonPretty :data="target" theme="dark" :item-height="32">
        <template #renderNodeKey="{ node }">
          <span class="cursor-pointer rounded px-4px text-20px hover:bg-teal-600" @click="SelectSourceRef?.open(node.path)">
            {{ node.key }}
          </span>
        </template>
        <template #renderNodeValue="{ node }">
          <span class="text-20px">
            <span>{{ typeof node.content }}</span>
            <span v-if="mapping.get(node.path)" class="mx-10px rounded bg-dark3 px-4px text-18px text-gray3">{{ mapping.get(node.path) }}</span>
          </span>
        </template>
      </VueJsonPretty>
    </div>
    <SelectSource ref="SelectSourceRef" @select="select" />

    {{ list }}
  </div>
</template>
