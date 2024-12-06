import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		VueMacros({
			shortBind: true,

			defineProp: {
				edition: 'kevinEdition',
			},

			defineEmit: true,
			setupSFC: true,
			exportExpose: true,
			chainCall: true,
			jsxDirective: true,
			exportRender: true,
			defineRender: true,

			plugins: {
				vue: vue({
					include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
				}),

				vueJsx: VueJsx(),
			},

			shortEmits: true,

			shortVmodel: {
				prefix: '$',
			},
		}),
	],
})
