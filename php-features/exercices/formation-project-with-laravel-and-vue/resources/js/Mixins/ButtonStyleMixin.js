export default {
    methods: {
        setColor(color, attribute, option, hover = false) {
            if(color !== 'white' && color !== 'black'){
                if(option === 'light'){
                    switch(attribute){
                        case 'background':
                            return hover ? `hover:bg-${color}-400` : `bg-${color}-100`
                        case 'border':
                            return hover ? `hover:border-${color}-300` : `border-${color}-300`
                        case 'text':
                            return hover ? `hover:text-${color}-100` : `text-${color}-600`
                    }
                } else if(option === 'dark'){
                    switch(attribute){
                        case 'background':
                            return hover ? `hover:bg-${color}-300` : `bg-${color}-700`
                        case 'border':
                            return hover ? `hover:border-${color}-300` : `border-${color}-300`
                        case 'text':
                            return hover ? `hover:text-${color}-900` : `text-${color}-100`
                    }
                } else {
                    switch(attribute){
                        case 'background':
                            return hover ? `hover:bg-${color}-500` : `bg-${color}-200`
                        case 'border':
                            return hover ? `hover:border-${color}-200` : `border-${color}-500`
                        case 'text':
                            return hover ? `hover:text-${color}-100` : `text-${color}-800`
                    }
                }
            } else {
                if(color === 'white'){
                    switch(attribute){
                        case 'background':
                            return hover ? 'hover:bg-gray-700' : 'bg-gray-100'
                        case 'border':
                            return hover ? 'hover:border-white' : 'border-gray-300'
                        case 'text':
                            return hover ? 'hover:text-gray-100' : 'text-gray-900'
                    }
                } else {
                    switch(attribute){
                        case 'background':
                            return hover ? 'hover:bg-gray-100' : 'bg-gray-800'
                        case 'border':
                            return hover ? 'hover:border-gray-300' : 'border-gray-100'
                        case 'text':
                            return hover ? 'hover:text-gray-900' : 'text-gray-100'
                    }
                }
            }
        }
    }
}
