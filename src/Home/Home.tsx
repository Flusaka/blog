import * as React from 'react';
import { Fragment, PureComponent } from 'react';

import Post from '../Models/Post';
import BlogService from '../Services/BlogService';

interface IState {
    posts: Post[];
}

class Home extends PureComponent<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            posts: []
        };
    }

    public async componentDidMount() {
        const posts = await BlogService.instance.getPosts();
        this.setState({
            posts
        });
    }
    
    public render() {
        const posts = this.state.posts.map(post => (
            <div key={post.id}>
                <div>{ post.title }</div>
            </div>
        ));

        return (
            <Fragment>
                {posts}
            </Fragment>
        );
    }
}

export default Home;