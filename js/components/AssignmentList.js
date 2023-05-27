import Assignment from './Assignment.js';
export default {
    components: {
        Assignment
    },
    template: `
            <section v-show="assignments.length">
                <h1 class="font-bold mb-2">
                    {{ title }}
                    <span class="text-sm text-gray-500">({{ assignments.length }})</span>
                </h1>
                <div class="flex gap-2">
                    <button 
                    @click="selectedTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-sm"
                    :class="{'bg-blue-600 text-white': selectedTag === tag}"
                    >
                        {{ tag }}
                    </button>
                </div>
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
        tags() {
            //return this.assignments.map(a => a.tag)
            return ['All', ...new Set(this.assignments.map(a => a.tag))]
        }
    }
}