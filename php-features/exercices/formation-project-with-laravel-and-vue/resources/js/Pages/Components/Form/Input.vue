<template>
    <div class="flex flex-col">
        <label :for="inputId" class="text-xs m-1">{{ label }}</label>
        <input :type="type" :class="computedClass" v-model="form.value" :id="inputId" :placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text'
        },
        index: {
            type: String,
            default: null
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        width: {
            type: String,
            default: 'w-full'
        }
    },

    data() {
        return {
            form: {
                value: ''
            },
            inputId: this.$props.index ? `${this.id}_${this.index}` : this.id
        }
    },

    computed: {
        computedClass() {
            const base = 'rounded p-2 shadow focus:outline-none text-gray-500 mb-2'
            return this.width + ' ' + base
        }
    },
    mounted(){
        // console.log(this.index);
    }
}
</script>
