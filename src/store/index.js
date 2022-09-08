import hospitalModule from './modules/hospitals';
import {createStore} from 'vuex';
 
const store = createStore({
    modules:{
        users: hospitalModule
    }
});
 
export default store;