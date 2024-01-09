module.exports = {
	plugins: [
	  require('autoprefixer'), // Добавление вендорных префиксов
	  require('postcss-preset-env'), // Использование новых возможностей CSS
	  require('postcss-custom-media'), // Поддержка пользовательских медиазапросов
	  require('postcss-nested'), // Вложенные правила, как в препроцессорах
	//   require('cssnano'), // Минификация и оптимизация CSS
	  require('postcss-flexbugs-fixes'), // Исправления для багов в Flexbox
	  
	  // Добавьте другие плагины, если они вам необходимы
	]
  };
  