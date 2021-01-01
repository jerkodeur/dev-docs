//TODO FILTER: Define a filter to apply to a value
// or const UcFirst = () => {} for locally usage
Vue.filter('UcFirst', (value, prefix = '', suffix = '') => {
    const words = value.split(' ')
    const transform = words.reduce((prev, curr) => {
        prev.push(curr[0].toUpperCase() + curr.slice(1))
        return prev
    }, [])
    return prefix + transform.join(' ').trimEnd() + suffix
})

//TODO VUE: Create a new vue
let vm = new Vue({
    //TODO VUE: Bind an HTML element on a vue instance
    el: '#app',
    //TODO VUE: Declare datas
    data: {
        title: 'Hello vue !',
        myPortfolio: 'https://portfolife.netlify.app/',
        actions: ['v-if', 'v-else', 'v-for', 'v-on'],
        showActions: false,
        time:5,
        firstname: 'Jérôme',
        lastname: 'Potié'
    },
    //TODO VUE: Declare computed values
    computed: { // These are only getters, its can't be redefined, just for display datas
        welcome() {
            return 'Welcome in the vue tutorial'
        },
        switchActions() {
            this.showActions = !this.showActions
        },
        //TODO VUE | Computed | Define getters and setters
        fullName: {
            get() {
                return this.firstname + ' ' + this. lastname
            },
            set(value) {
                const [ firstname, lastname ] = value.split(' ')
                this.firstname = firstname ? firstname : 'Jérôme'
                this.lastname = lastname ? lastname : 'Potié'
            }
        },
    },
    //TODO VUE: mounted
    mounted() {
        this.$timer = setInterval(() => {
            if(this.time >= 2) this.time --
            else {
                this.time = 0
                clearTimeout(this.$timer)
                this.switchActions
            }
        }, 1000)
    },
    //TODO VUE: destroyed
    destroyed() {
        clearTimeout(this.$timer)
    },
    //TODO VUE: Apply locally filters or directives to the componant
    filters: { /* filters to apply only on this vue */},
    directives: { /* directives to apply only on this vue */}
})