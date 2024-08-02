# stiljira-express-postgress

### Указания по настройкам среды

* Добавить файл .env в корень приложения перед запуском docker-compose
* Проверить, что открыты порты для доступа к приложению в локальной сети
* Проверить, что env VITE_FRONT_URL и BACK_PORT совпадает с ip-адресом машины в локальной сети и включены в env VITE_FRONT_URL

### app full setup

`yarn setup`

### run docker container

- `docker build .`
- `docker compose up -d`

### develop

- `yarn build`
- `yarn dev`
