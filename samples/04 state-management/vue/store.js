const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ],
        user: {
            name: "oric",
            isAdmin: true,
        },
    },
    mutations: {
        remove (state, contact) {
            const index = state.contacts.indexOf(contact);
            if(index != -1) {
                state.contacts.splice(index, 1);
            }
        },
    },
    actions: {
        remove({commit}, contact) {
            commit("remove", contact);
        }
    }
})
