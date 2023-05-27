import Assignments from "./Assignments.js"
import Panel from "./Panel.js"

export default {
    components: {
        Assignments, 
        Panel
    },
    template: `
            <div class="grid gap-6">
                <assignments></assignments>
                <panel>
                    This is the panel content Default slot
                </panel>
                <panel>
                    <template v-slot:heading>
                        This is the panel content Heading slot
                    </template>
                    <template v-slot:default>
                        This is the panel content Default slot
                    </template>
                    <template v-slot:footer>
                        This is the panel content Footer slot
                    </template>
                </panel>
                <panel theme="light">
                    <template #heading>
                        This is the panel content Heading slot
                    </template>
                    <template #default>
                        This is the panel content Default slot
                    </template>
                    <template #footer>
                        This is the panel content Footer slot
                    </template>
                </panel>
            </div>
        `,
}