import Header from '../../components/Header/header.vue';
import Footer from '../../components/Footer/footer.vue';

export default {
  props: {
    

  },
  data() {
    return {
      posts:[]
    };
  },
  components: {
    'Header-app': Header,
    'Footer-app': Footer,
  },
  methods: {
   
  },
  created() {
    this.$http.get('https://boatreview-84b38.firebaseio.com/posts.json').then(function(data){
        return data.json()
    }).then(function(data){
        var postsArray = [];
        for (let key in data){
            data[key].id = key;
            postsArray.push(data[key]);
        }
        this.posts = postsArray;
        //console.log(this.blogs);
    });
},
};
