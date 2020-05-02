import Header from '../../components/Header/header.vue';
import Footer from '../../components/Footer/footer.vue';
import Newscontainer from  '../../components/Newsblock/newsblock.vue';
import Reviewscontainer from  '../../components/Reviewsblock/reviewsblock.vue';
import Buycontainer from  '../../components/Buyblock/buyblock.vue';

export default {
  props: {
  },
  data() {
    return {
    };
  },
  components: {
    'Header-app': Header,
    'Footer-app': Footer,
    'News-container': Newscontainer,
    'Reviews-container': Reviewscontainer,
    'Buy-container': Buycontainer,

  },
  methods: {
   
  },
 
  
};
