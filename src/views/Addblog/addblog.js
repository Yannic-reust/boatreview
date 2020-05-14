import Header from '../../components/Header/header.vue';
import Footer from '../../components/Footer/footer.vue';
import firebase from 'firebase'

export default {
  props: {
  },
  data() {
    return {
        posts:{
            BoatName: '',
            Heading:'',
            CatchText: '',
            Text: '',
            Price: '',
            ImageName:'',
            Contact:''
        },
        imageData: null,
        picture: null,
        uploadValue:0
    };
  },
  components: {
    'Header-app': Header,
    'Footer-app': Footer,
  },
  methods: {
    previewImage(event) {
        this.uploadValue=0;
        this.picture=null;
        this.imageData = event.target.files[0];
      },
  
      onUpload(){
        this.posts.ImageName = this.imageData.name;
        this.picture=null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`,snapshot=>{
         
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture =url;
          });});
      
        this.$http.post('https://boatreview-84b38.firebaseio.com/posts.json', this.posts);
     
    }
},

};
