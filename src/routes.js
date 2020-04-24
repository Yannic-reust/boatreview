import Home from './views/Home/home.vue'
import News from './views/News/news.vue'
import Type from './views/Type/type.vue'
import Reviews from './views/Reviews/reviews.vue'
import Buy from './views/Buy/buy.vue'

export default[
    {path:'/', component: Home},
    {path:'/News', component: News},
    {path:'/Type', component: Type},
    {path:'/Reviews', component: Reviews},
    {path:'/Buy', component: Buy},
]