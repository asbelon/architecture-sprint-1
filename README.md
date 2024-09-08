_реализованы 2 уровня решения_

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
- [Profile](frontend/microfrontend/profile/src/App.jsx)
- [Places](frontend/microfrontend/places/src/App.jsx)
- [Vote](frontend/microfrontend/vote/src/App.jsx)

## Композиция

Микрофронтенды интегрируются методом run time с клиентской композицией. Для реализации композиции микрофронтендов 
используется фреймворк Module Federation. Для управления композицией микрофронтендов используется приложение
[Host](frontend/microfrontend/host/src/App.jsx)

## Коммуникация между микрофронтендами

Управление состоянием и коммуникациями между микрофронтендами осуществляется через взаимодействие на основе API. 
Получение и обновлением данных осуществляется из централизованного бэкенда. Синхронизация происходит через 
localstorage (библиотека глобального состояния).

- [Profile API](frontend/microfrontend/profile/src/utils/auth.js)
- [Places API](frontend/microfrontend/places/src/utils/api.js)
- [Vote API](frontend/microfrontend/vote/src/utils/api.js)

## Микрофронтенды

### Профиль пользователя Profile

Отвечает за регистрацию, авторизацию и редактирование пользовательских данных.
Функционал реализован в компонентах:

[EditAvatarPopup](frontend/microfrontend/profile/src/components/EditAvatarPopup.js)
[EditProfilePopup](frontend/microfrontend/profile/src/components/EditProfilePopup.js)
[Login](frontend/microfrontend/profile/src/components/Login.js)
[Register](frontend/microfrontend/profile/src/components/Register.js)

### Управление местами Places

Отвечает за размещением мест и отображение их в виде каталога.
Функционал реализован в компонентах:

[AddPlacePopup](frontend/microfrontend/profile/src/components/AddPlacePopup.js)
[Card](frontend/microfrontend/profile/src/components/Card.js)
[ImagePopup](frontend/microfrontend/profile/src/components/ImagePopup.js)

### Голосование Places

Отвечает за голосование за место пользователями.
Функционал реализован в компонентах:

[LikeButton](frontend/microfrontend/profile/src/components/LikeButton.js)

### Основной сервис Host

Отвечает за совместно используемый функционал и интеграцию микрофронтентов.
Функционал реализован в компонентах:

[Header](frontend/microfrontend/profile/src/components/Header.js)
[Main](frontend/microfrontend/profile/src/components/Main.js)
[Footer](frontend/microfrontend/profile/src/components/Footer.js)
[PopupWithForm](frontend/microfrontend/profile/src/components/PopupWithForm.js)
[ProtectedRoute](frontend/microfrontend/profile/src/components/ProtectedRoute.js)