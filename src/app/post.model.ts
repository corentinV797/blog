export default class Post {
    public loveVoteCount: number;
    constructor( public title: string, public content: string) {
        this.title = title;
        this.content = content;
        this.loveVoteCount = 0;
    }
}
