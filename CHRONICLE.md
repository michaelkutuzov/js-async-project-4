### Самый старт

https://www.coreycleary.me/setting-up-your-node-package-to-be-run-from-the-command-line
https://dev.to/dendekky/how-to-build-a-command-line-tool-with-nodejs-a-step-by-step-guide-386k
https://sky.pro/wiki/media/peredacha-argumentov-komandnoj-stroki-v-node-js/

Не забыть предварить входной файл shebang'ом

1. Добавить в package.json секцию [bin](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin)
2. Сделать файл исполняемым
3. Запустить команду `npm link` в папке пакета

##### Вывод помощи

- Добавить утилиты для разбора аргументов

##### Линтинг

https://dev.to/maximization/eslint-setup-in-nodejs-a-detailed-guide-for-beginners-1h7l

https://eslint.style/rules/padding-line-between-statements

##### Тестирование
