module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	if (str.length < 2) return false

	let count = 0
	let idx = str.indexOf('g')
	const visited = []
	let happy = true

	while (idx !== -1) {
		count ++
		visited.push(idx)
		idx = str.indexOf('g', idx + 1)
	}

	visited.forEach(idx => {
		const prev = str[idx - 1].toLowerCase()
		const current = str[idx].toLowerCase()
		const next = str[idx + 1] ? str[idx + 1].toLowerCase() : '_'

		if (current === 'g' && prev !== 'g' && next !== 'g') {
			happy = false
		}
	})

	return happy
};