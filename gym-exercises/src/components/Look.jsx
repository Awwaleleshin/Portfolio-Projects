const url = 'https://exercisedb.p.rapidapi.com/status';
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '52360df790msh4c38580ac1eec60p1796bdjsnb569672cae27',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

try {
	const response = async () => { await fetch(url, options);
	const result = await response.text();
	console.log(result);
}} catch (error) {
	console.error(error);
}