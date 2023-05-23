// import { ref } from 'vue'
// import { Meta, StoryFn } from '@storybook/vue3'
// import TextField from './TextField.vue'

// export default {
//   title: 'TextField',
//   component: TextField,
//   argTypes: {
//     // controlタイプの変更
//     text: {
//       control: {
//         type: 'text'
//       }
//     }
//   }
// } as Meta<typeof TextField>

// const Template: StoryFn<typeof TextField> = args => ({
//   components: { TextField },
//   setup () {
//     const text = ref<string | number | null>(null)
//     return { args, text }
//   },
//   template: `
//     <TextField v-model:value="text" v-bind="args" />
//     <div style="margin-top: 10px">出力：{{ String(text) }}</div>
//     <div style="margin-top: 10px">型：{{ typeof text }}</div>
//   `
// })

// export const basic = Template
