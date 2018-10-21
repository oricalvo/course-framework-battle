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
