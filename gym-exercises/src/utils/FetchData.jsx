export const exerciseOptions = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'f76d7eff5cmsh845466f1635ee9dp12be5ajsne202e7ef0b24'
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}