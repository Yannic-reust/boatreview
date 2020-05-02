import Home from './views/Home/home.vue'
import News from './views/News/news.vue'
import Contact from './views/Contact/contact.vue'
import Reviews from './views/Reviews/reviews.vue'
import Buy from './views/Buy/buy.vue'
import Addblog from './views/Addblog/addblog.vue'

export default[
    {path:'/', component: Home},
    {path:'/News', component: News},
    {path:'/Contact', component: Contact},
    {path:'/Reviews', component: Reviews},
    {path:'/Buy', component: Buy},
    {path:'/Addblog', component: Addblog},
]