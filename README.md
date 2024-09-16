**Задание 1**

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

Для всех микрофронтендов выбран одинаковый фреймворк react по следующим причинам:
- имеет развитую экосистему 
- предлагает передовые решения по управлению состоянием и интерактивными компонентами
- решено на данном этапе не менять фреймворк и оставить таким же как и у монолита, чтобы не усложнять переход на 
  микрофронтенды и их дальнейшее сопровождение 

## Композиция

Микрофронтенды интегрируются методом run time с клиентской композицией. Для реализации композиции микрофронтендов 
используется фреймворк Module Federation. Для управления композицией микрофронтендов используется приложение
[Host](frontend/microfrontend/host/src/App.jsx)

В качестве средства композиции Module Federation выбран по следующим причинам:
- позволяет объединять модули разных приложений в единое целое
- позволяет объединенным модулям использовать общий код
- оптимизирует использование ресурсов
- основная команда компании имела опыт работы с Module Federation

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

-----------

**Задание 2**

[arch_template_task2.drawio](./arch_template_task2.drawio)

Вкладка "Структура сервисов": представлена структура сервисов их границы без связей

Вкладка "Оплата заказа": основной сценарий оплаты заказа, модифицированный под новую структуру сервисов

На диаграмме на вкладке "Структура сервисов" отображена связь сервисов. Стрелкой указано направление отока управления.

Добавлены акторы, в том числе и новые.

По базам данным сервисов распределены сущности (в виде основных их атрибутов).