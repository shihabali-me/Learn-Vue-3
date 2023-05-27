import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-2">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
            <assignment-create @add="add"></assignment-create>
            
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
        add(newAssignment) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: newAssignment,
                completed: false
            })
        }
            
    }
}