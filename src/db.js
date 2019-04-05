import store from './store.js'

const API = 'https://api.graph.cool/simple/v1/cju22gay16tvt0187rjofh04g'

const query = (body) => fetch(API, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({ query: `${body}` })
})
.then(res => res.json())
// .then(res => console.log(res.data))




const mutation = (mutationQuery) => fetch(API, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({
		query: `mutation { 
			${mutationQuery}
		}`
	})
})
.then(res => res.json())
.then(data => console.log('mutation data returned:', data))


export {query, mutation}