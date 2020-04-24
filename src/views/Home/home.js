
import Header from '../../components/Header/header.vue';
import Footer from '../../components/Footer/footer.vue';

export default {
  props: {
    darkmode: Boolean,
  },
  data() {
    return {
      websitecat: ['Athlete', 'Business', 'Career'],
      
    };
  },
  components: {

   
    'Header-app': Header,
    'Footer-app': Footer,
  },
  methods: {
   
  },
};
