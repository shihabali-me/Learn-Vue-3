export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="selectedTag = tag"
                @click="$emit('change', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-sm"
                :class="{'bg-blue-600 text-white': currentTag === tag}"
                >
                    {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: {
            type: Array,
            required: true
        },
        currentTag: String
    },
    data() {
        return {
            selectedTag: "All"
        }
    },
    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)]
        }
    }
}