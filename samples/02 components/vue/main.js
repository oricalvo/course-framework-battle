Vue.component('contact-details', {
    props: ['contact'],
    template: `
        <div>
            <span>{{contact.name}}</span>
            <button @click="remove">Delete</button>        
        </div>`,
    methods: {
        remove: function() {
            this.$emit("on-delete", this.contact);
        },
    }
})

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
        },
        onContactDelete: function(contact) {
            console.log("onContactDelete", contact);
        }
    }
})
