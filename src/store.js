import { observable, action } from 'mobx';
import {query} from './db.js';

class Store {
	@observable messages = [];
	@observable user = ''

	@action storedMessages() {
		this.messages = query("{allMessages{id,datetime,text,user}}").then(res => res.json).then(res => console.log(res))
	}
}

const store = new Store();

export default store;