import Header from '../../components/Header/header.vue';
import Footer from '../../components/Footer/footer.vue';

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
  },
  methods: {
    handleView(){
      this.moblieView = window.innerWidth <= 768
    }
   
  },
  created(){
    this.handleView()

  }
};
