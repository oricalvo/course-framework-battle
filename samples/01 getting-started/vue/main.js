var app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ],
        user: {
            name: "oric",
            isAdmin: true,
        }
    },
    methods: {
        sayHello: function () {
            alert("Hello " + this.user.name);
        }
    }
})
