import { observable } from 'mobx';
import {query} from './db.js';

class Store {
	@observable messages = [];
	@observable user = null

}

const store = new Store();

export default store;
