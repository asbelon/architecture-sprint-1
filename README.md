# Бизнес функции

На основе предметно-ориентированного проектирования в проекте определяются вполне независимые бизнес функции:

- Управление пользователями
- Управление информации о местах
- Управление пользовательским голосованием

# Реализация

Сопровождение и реализацию бизнес функции принято разпределить между отдельными командами. Каждая команда отвечает 
за реализацию одной бизнес функции в виде front-приложения (микрофронтенда). Основаня команда отвечает за backend и 
основное front-приложение. 

Соответствующая бизнес функция реализуется отдельным микрофронтендом:
- Profile
- Places
- Vote

# Композиция

Микрофронтенды интегрируются методом run time с клиентской композицией. Для реализации композиции микрофронтендов 
используется фреймворк Module Federation.

Управления композицией микрофронтендов используется приложение 

- Host

[microfrontend](frontend/microfrontend)

# Коммуникация между микрофронтендами

Управление состоянием и коммуникациями между микрофронтендами осуществляется через взаимодействие на основе API и 
localstorage. Получение и обновлением данных осуществляется из централизованного бэкенда. Синхронизация 
происходит через localstorage (библиотека глобального состояния).
