export default {
    template: `
        <button 
        :class="{
            'p-2 rounded-lg mt-2 disabled:cursor-not-allowed' : true,
            'bg-blue-500 text-white': buttontype === 'primary',
            'bg-red-500 text-white': buttontype === 'danger',
            'bg-green-500 text-white': buttontype === 'success',
            'bg-yellow-500 text-white': buttontype === 'warning',
            'is-loading': processing
        }" 
        :disabled="processing"
        >
            <slot />
        </button>`,

    props : {
        buttontype : {
            type: String,
            default: 'primary'
        },
        processing : {
            type: Boolean,
            default: false
        }
    },
}