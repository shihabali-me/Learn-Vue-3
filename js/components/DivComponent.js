export default {
    template: `
        <div class="bg-gray-200 p-4 rounded-lg">
            <h1 class="text-2xl font-bold">{{ message }}</h1>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button class="bg-blue-500 text-white p-2 rounded-lg mt-2 disabled:cursor-not-allowed" :disable="processing">
                <slot />
            </button>
        </div>`,
    data() {
        return {
            message: 'Hello World from Vue 3',
            processing: false
            }
        },
        mounted() {
            alert('Mounted')
        }
}
