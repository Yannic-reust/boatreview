export default {
    props: {
        moblieView:"",
        
    },
    data() {
      return {
        showNav: false
      };
    },
    components: {


    },
    methods: {
      opennav(){
        this.showNav = true
        },
      closenav(){
        this.showNav = false
      }
    }
  };