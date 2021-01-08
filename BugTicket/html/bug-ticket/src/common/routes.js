import ContentDefult from '../components/Content/ContentDefult.vue';
import ContentCreate from '../components/Content/ContentCreate.vue';
import ContentEdit from '../components/Content/ContentEdit.vue'

console.log(ContentDefult)
const routes = [
    {
        path: '/content/defult',
        name: 'contentDefult',
        component: ContentDefult
    },
    {
        path: '/content/create',
        name: 'contentCreate',
        component: ContentCreate
    },
    {
        path: '/content/edit',
        name: 'contentEdit',
        component: ContentEdit
    },
    
]
export default routes