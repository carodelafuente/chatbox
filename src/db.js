import store from './store.js'

const API = 'https://api.graph.cool/simple/v1/cju22gay16tvt0187rjofh04g'

const query = (body) => fetch(API, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({ query: `${body}` })
})
.then(res => res.json())


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


export {query, mutation}
