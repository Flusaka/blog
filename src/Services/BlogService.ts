import * as firebase from 'firebase';
import Post from '../Models/Post';

class BlogService {
    private static blogServiceInstance: BlogService;

    private config: any = {
        apiKey: "AIzaSyCLArVkjrPO6ucXGt-1VB1kO7CR51B2WOg",
        authDomain: "narmitage-blog-develop.firebaseapp.com",
        databaseURL: "https://narmitage-blog-develop.firebaseio.com",
        messagingSenderId: "202822394376",
        projectId: "narmitage-blog-develop",
        storageBucket: "narmitage-blog-develop.appspot.com"
    };

    private firestore: firebase.firestore.Firestore;
      
    private constructor() {
        firebase.initializeApp(this.config);

        this.firestore = firebase.firestore();
    }

    public static get instance(): BlogService {
        return this.blogServiceInstance || (this.blogServiceInstance = new BlogService());
    }

    public async getPosts(): Promise<Post[]> {
        const posts = await this.firestore.collection('posts').orderBy('createdAt', 'desc').get();
        if(!posts.empty) {
            return posts.docs.map(post => {
                return new Post(post);
            }).sort();
        }
        return [];
    }
}

export default BlogService;