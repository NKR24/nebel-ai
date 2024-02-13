module.exports = {
  apps : [{
    name: "",
    script: "./target/release/<имя-вашего-приложения>", // путь к исполняемому файлу
    watch: true,
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
