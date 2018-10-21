Vue.component('contact-list', {
    template: `<ul>
        <li v-for="contact in contacts">
            <contact-details :contact="contact" @on-delete="onContactDelete"></contact-details>
        </li>
    </ul>`,
    computed: Vuex.mapState({
        contacts: "contacts",
    }),
    methods: Vuex.mapActions({
        onContactDelete: "remove"
    })
})
