import { observable } from 'mobx';
import {query} from './db.js';

class Store {
	@observable messages = [];
	@observable user = null

	storeMessages() {
		this.messages = query("{allMessages{id,datetime,text,user}}").then(res => res.json)
	}
}

const store = new Store();

export default store;