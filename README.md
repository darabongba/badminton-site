# 羽毛球教程

Vue 3 + Vite + Tailwind CSS 公开站。策展脚本在 `/root/.hermes/scripts/badminton-curator/`。

开发：`npm install && npm run dev`

数据文件：`public/data/catalog.json`（由 `publish.py` 写入）。

## 部署

- 源码：本仓库 `main`
- 产物仓库：https://github.com/bbbadminton/bbbadminton.github.io （仅 dist）
- 工作流：`.github/workflows/build-and-deploy.yml`（push main / 手动触发）
- 访问：https://bbbadminton.github.io/

在仓库 Settings → Secrets 配置 `DEPLOY_TOKEN`（需对 `bbbadminton/bbbadminton.github.io` 有写权限）。
