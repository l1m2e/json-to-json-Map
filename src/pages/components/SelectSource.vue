<script lang="ts" setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { source } from '../jsons'

const emits = defineEmits<{ select: [map: { target: string, source: string }] }>()
const show = ref(false)

const targetPath = ref('')

function open(target: string) {
  targetPath.value = target
  show.value = true
}

function select(node: any) {
  emits('select', { target: targetPath.value, source: node.path })
  show.value = false
}

defineExpose({ open })
</script>

<template>
  <el-drawer v-model="show" title="I am the title" :with-header="false">
    <VueJsonPretty :data="source" theme="dark">
      <template #renderNodeKey="{ node }">
        <span class="cursor-pointer rounded px-4px text-20px hover:bg-teal-600" @click="select(node)">
          {{ node.key }}
        </span>
      </template>
      <template #renderNodeValue="{ node }">
        <span class="text-20px">
          <span>{{ typeof node.content }}</span>
        </span>
      </template>
    </VueJsonPretty>
  </el-drawer>
</template>
