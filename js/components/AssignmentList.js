import Assignment from './Assignment.js';
export default {
    components: {
        Assignment
    },
    template: `
            <section v-show="assignments.length">
                <h1 class="font-bold mb-2">{{ title }}</h1>
                <ul class="border border-gray-600 divide-y divide-gray-600">
                    <assignment 
                        v-for="assignment in assignments" 
                        :key="assignment.id"
                        :assignment="assignment"
                    ></assignment>
                </ul>
            </section>
            `,
    props: {
        assignments: {
            type: Array,
            required: true
        },
        title: String
    },
}