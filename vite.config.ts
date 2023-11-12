// vite.config.js
import { splitVendorChunkPlugin } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  server: {
    port: 4040
  },
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						const modules = [
							'vue',
							'vue-router',
							'pinia',
							'@floating-ui/dom',
						]

						const chunkName = modules.find(module => id.includes(module))
						return chunkName ? `vendor-${chunkName}` : 'vendor-others'
					}
				},
				// ...
			},
		},
		chunkSizeWarningLimit: 600, // nebo jakoukoli jinou hodnotu, která je vhodná pro vaši aplikaci
	},
})
