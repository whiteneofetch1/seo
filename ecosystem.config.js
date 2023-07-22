 
module.exports = {
  apps: [
    {
      name: 'xxxclient',
       watch: ["server", "client"],
         // Delay between restart
    watch_delay: 1000,
    ignore_watch : ["node_modules", "client/img"],
      exec_mode: 'fork',
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
