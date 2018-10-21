var app = new Vue({
    el: '#app',
    store,
    computed: Vuex.mapState({
        user: "user",
    }),
    template: `<div>
        <h1>Hello Vue</h1>
        
        <a v-if="user.isAdmin" href="#admin">Admin</a>
        <button v-on:click="sayHello">Say Hello</button>
        
        <contact-list></contact-list>
    </div>`,
    methods: {
        sayHello: function () {
            alert("Hello " + this.user.name);
        },
    }
})
