const state = () =>({
    hospitals:[]

})

const getters ={
    allHospitals(state){
        return state.hospitals;
    }
   
}

const actions ={ async fetchHospitals(){
    var response =  await axios.get("https://hospitalcmr.herokuapp.com/");
    console(response.data);
    commit('saveAllHospitals', response.data);
 }}

const mutations = { saveAllHospitals(state, payload){
    state.hospitals = payload;
}}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}