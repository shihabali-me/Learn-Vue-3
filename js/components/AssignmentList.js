import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';
export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
            <section v-show="assignments.length">
                <h1 class="font-bold mb-2">
                    {{ title }}
                    <span class="text-sm text-gray-500">({{ assignments.length }})</span>
                </h1>
                <assignment-tags 
                    :initialTags="assignments.map(a => a.tag)"
                    :currentTag="selectedTag"
                    @change="selectedTag = $event"

                >
                </assignment-tags>
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment 
                        v-for="assignment in filteredAssignments" 
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
    data() {
        return {
            selectedTag: "All"
        }
    },

    computed: {
        filteredAssignments() {
            if (this.selectedTag === "All") {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.selectedTag)
        },
    
    }
}