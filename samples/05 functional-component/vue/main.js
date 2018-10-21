Vue.component('my-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tag name
            this.$slots.default // array of children
        )
    },
    props: ["level"],
});

var app = new Vue({
    el: '#app',
    template: `<div>
        <my-heading :level="1">Hello Vue</my-heading>  
    </div>`,
})
