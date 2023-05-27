import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="flex gap-8">
            <assignment-list 
                :assignments="filters.inProgress" 
                title="In Progress Assignments"
            >
                    <assignment-create 
                        @add="add"
                    >
                    </assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed Assignments" 
                    can-toggle 
                    @toggle="showCompleted = !showCompleted">
                </assignment-list>
            </div>

        </section>
        `,
    data() {
        return {
            assignments: [],
            showCompleted: true
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
    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data
            })
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