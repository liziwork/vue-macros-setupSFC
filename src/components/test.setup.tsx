import { definePropsRefs,withDefaults } from 'unplugin-vue-macros/macros' with {type: 'macro'}

export interface Props {
  foo?: string
	bar?: number
  aaa: {
    a: string
    b: number
  }
}

const {foo} = withDefaults(
	definePropsRefs<Props>(),
	{ bar: 0 }
)

const emits = defineEmits<{
  // 元组
  'update:modelValue': [val: string]
  // 方法
  update: (val: string) => void
}>()

export default () => <div>{foo.value}</div>
