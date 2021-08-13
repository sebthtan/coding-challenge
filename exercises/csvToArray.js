module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
	const res = []
	const lines = csv.split('/n')

	const categories = lines[0].split(',')
	const csvWithoutCategories = lines.slice(1)

	for (let i = 0; i < csvWithoutCategories.length; i ++) {
		const obj = {}
		const data = csvWithoutCategories[i].split(',')
		
		for (let j = 0; j < categories.length; j ++) {
			const category = categories[j]

			obj[category] = data[j]
		}

		res.push(obj)
	}

	return res

};