export default {
    template: `
    <li>
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.completed">
    </li>
    `,
    props: {
        assignment: Object
    }
}