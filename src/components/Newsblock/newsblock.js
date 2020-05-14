import firebase from 'firebase'


export default {
  props: {
    posts: Array
  },
  data() {
    return {
      imgUrl:[]
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages(){
      firebase
  .storage()
  .ref('Images')
  .getDownloadURL()
  .then(imgUrl => {
    console.log(imgUrl);
  });
    }
    
    
  },
  computed: {

 
  }
};
