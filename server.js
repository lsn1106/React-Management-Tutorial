const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/api/customers`, (req, res) => {
	res.send([
		{
			id: 1,
			image: `https://placeimg.com/64/64/1`,
			name: `이선노`,
			birthday: `961106`,
			sex: `남자`,
			job: `대학생`
		},
		{
			id: 2,
			image: `https://placeimg.com/64/64/2`,
			name: `브라이언`,
			birthday: `961106`,
			sex: `여자`,
			job: `백수`
		},
		{
			id: 3,
			image: 'https://placeimg.com/64/64/3',
			name: `다이아`,
			birthday: `961106`,
			sex: `남자`,
			job: `디자이너`
		}
	]);
});

app.listen(port, () => console.log(`listening on port ${port}`));
