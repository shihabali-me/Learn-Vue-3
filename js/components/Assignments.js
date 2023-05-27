import AssignmentList from "./AssignmentList.js"
export default {
    components: {
        AssignmentList
    },
    template: `
        <section class="space-y-2">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" class="p-2" placeholder="Add Assignment">
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
        `,
    data() {
        return {
            assignments: [{
                    id: 1,
                    name: 'Finished Project',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Read Chapter 4',
                    completed: false
                },
                {
                    id: 3,
                    name: 'Turn in homework',
                    completed: false
                }
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            }
        }
    },

    methods: {
        add() {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: this.newAssignment,
                completed: false
            });
            this.newAssignment = '';
        }
    }
}