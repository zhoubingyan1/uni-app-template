import { defineConfig, loadEnv } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
// @ts-ignore
import path from "path"
// @ts-ignore
import { execSync } from "child_process"
// @ts-ignore
import commonjs from "@rollup/plugin-commonjs"
// @ts-ignore
import requireTransform from "vite-plugin-require-transform"

// @ts-ignore
export default defineConfig((mode) => {
  return {
    base: "./",
    server: {
      host: "0.0.0.0",
      port: "5173",
      open: true,
      cors: true, // 允许跨域
      proxy: {
        "/api": {
          // @ts-ignore
          target: loadEnv(mode, process.cwd()).VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/api/, "")
        }
      }
    },
    resolve: {
      alias: {
        // @ts-ignore
        "@": path.resolve(__dirname, "./src"),
        // @ts-ignore
        "~": path.resolve(__dirname, ".")
      }
    },
    plugins: [
      uni(),
      requireTransform({
        fileRegex: /.ts$.js$|.vue$/
      }),
      commonjs() // 使vite支持commonjs语法, 此项目中加密的包crypto-js用到了commonjs
    ]
  }
})
