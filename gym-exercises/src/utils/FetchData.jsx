export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '52360df790msh4c38580ac1eec60p1796bdjsnb569672cae27',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}