export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('update:selectedTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-sm"
                :class="{'bg-blue-600 text-white': selectedTag === tag}"
                >
                    {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        selectedTag: String,
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)]
        }
    }
}