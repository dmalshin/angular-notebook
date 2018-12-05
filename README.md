# angular-notebook

## Task Description

```
Создать приложение - записную книжку разработчика.
Со следующим функционалом:
1) создание заметки (заголовок, приоритет (высокий, нормальный, низкий), дата выполнения)
2) просмотр всех заметок в виде таблицы с возможностью постраничной пагинации
3) просмотр ранее сохраненной заметки
4) реализовать back-end (любой стек, опционально)

При реализации использовать:
angular6+, angular material 6+

Исходный код выложить на github / bitbucket / другой сервис
```

## Project setup
```
npm install
cd server
npm install
```

### Starts backend server
```
cd server
npm start
```

### Compiles and hot-reloads client for development
```
npm start
```

### Compiles and minifies client for production
```
npm run build
```

## ToDo and Ideas

- Read the styleguide and apply it to the app
- Add e2e test for adding a note
- Add enum check for priority in server
- Add rollback or error message on failed optimistic update
- Add HTTP errors handling
- Find out why inputs placeholder animation not working
- Add russian locale to the datepicker
- Add date string validation
- Check if webpack imports only one moment locale
- Add color indicators for priorities
- Add indications for empty note name field
- Add hammer.js
- Check how the app will behave with zero notes
- Display date in local timezone
- Randomize date and priority in generated data

