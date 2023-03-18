import AssignmentList from "./AssignmentList.js"
export default {
    components: {
        AssignmentList
    },
    template: `
        <section class="space-y-2">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
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
            ]
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
}