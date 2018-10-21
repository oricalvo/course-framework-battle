var app = new Vue({
    el: '#app',
    template: `<div>
        <h1>Hello Vue</h1>
        
        <input v-model="name">
        <button v-on:click="sayHello">Say Hello</button>
    </div>`,
    data: {
        name: ""
    },
    methods: {
        sayHello: function () {
            alert("Hello " + this.name);
        },
    }
})
