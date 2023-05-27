export default {
    template: `
    <li class="p-2 flex justify-between items-center">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.completed" class="ml-3">
    </li>
    `,
    props: {
        assignment: Object
    }
}