class Post {
    public id: string;

    public title: string;

    public content: string;

    public categories: any;

    public createdAt: any;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.get('title');
        this.content = data.get('content');
        this.categories = data.get('categories');
        this.createdAt = data.get('createdAt');
    }
}

export default Post;