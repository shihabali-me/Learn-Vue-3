export default {
    template: `
        <form @submit.prevent="add">
            <div class="flex border border-gray-600 text-black">
                <input v-model="newAssignment" type="text" class="p-2" placeholder="Add Assignment">
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}
