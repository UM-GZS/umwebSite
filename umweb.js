var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home');
})

app.get('/about', (req, res) => {
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune });
})

//404页面
app.use((req, res) => {
	res.status(404);
	res.render('404');
});


//500页面
app.use((err, req, res, next) => {
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

var fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];
