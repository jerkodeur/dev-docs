<template>
    <button :class="computedClass" :type="type">
        <slot></slot>
    </button>
</template>

<script>

import ButtonStyleMixin from '../../../Mixins/ButtonStyleMixin'

export default {
    mixins: [ButtonStyleMixin],
    props: {
        color: {
            default: 'indigo',
            type: String
        },
        defStyle: {
            default: 'normal',
            validator: function(value){
                return value.includes('light') || value.includes('dark') || value.includes('normal')
            }
        },
        customStyle: {
            default: String
        },
        type: {
            type: String,
            default: 'submit'
        }
    },

    computed: {
        computedClass() {
            const { color, defStyle, customStyle } = this.$props
            const border  = `border-2 border-solid ${this.setColor(color, 'border', defStyle)}`
            const background = `${this.setColor(color, 'background', defStyle)}`
            const text = `${this.setColor(color, 'text', defStyle)}`
            const hover = `${this.setColor(color, 'background', defStyle, true)} ${this.setColor(color, 'text', defStyle, true)} ${this.setColor(color, 'border', defStyle, true)}`
            const base = 'rounded-md py-1 px-2'
            const styles = [base, border, background, text, hover, customStyle]
            const finalStyle = styles.reduce((fullStyle, currentStyle) => {
                return fullStyle = fullStyle + currentStyle + ' '
            }, '')
            return finalStyle
        }
    }
}
</script>
