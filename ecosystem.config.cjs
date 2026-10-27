/**
 * Configuração do PM2 para o site Goldtech (Next.js).
 *
 * Sobe um único processo:
 *  - goldtech -> Next.js em produção, porta 3090, atrás do proxy reverso.
 *
 * Uso:
 *  npm run build
 *  pm2 start ecosystem.config.cjs
 *  pm2 reload ecosystem.config.cjs --update-env   # após um novo build
 *  pm2 logs goldtech
 *  pm2 save && pm2 startup                        # persistir entre boots
 *
 * A porta fica em PORT e também é passada ao `next start -p`, para o
 * processo não depender do valor padrão 3000.
 */

module.exports = {
  apps: [
    {
      name: "goldtech",
      script: "npm",
      args: "run start -- -p 3090",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3090",
      },
    },
  ],
}
