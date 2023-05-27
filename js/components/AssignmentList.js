import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';
import Panel from './Panel.js';
export default {
    components: {
        Assignment,
        AssignmentTags,
        Panel
    },
    template: `
            <panel v-show="assignments.length" class="w-62" id="my-panel">
                <div class="flex justify-between item-start">
                    <h1 class="font-bold mb-2">
                        {{ title }}
                        <span class="text-sm text-gray-500">({{ assignments.length }})</span>
                    </h1>
                    <button 
                        v-show="canToggle"
                        @click="$emit('toggle')"
                        >
                        &times;
                    </button>
                </div>
                <assignment-tags 
                    v-model:selectedTag="selectedTag"
                    :initialTags="assignments.map(a => a.tag)"
                >
                </assignment-tags>
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment 
                        v-for="assignment in filteredAssignments" 
                        :key="assignment.id"
                        :assignment="assignment"
                    ></assignment>
                </ul>
                <template #footer>
                    Assignment List Footer
                </template>
            </panel>
            `,
    props: {
        assignments: {
            type: Array,
            required: true
        },
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
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