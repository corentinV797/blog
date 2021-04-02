export default class Post {
    public loveVoteCount: number;
    public lastUpdate: Date;
    constructor( public title: string, public content: string) {
        this.title = title;
        this.content = content;
        this.loveVoteCount = 0;
        this.lastUpdate = new Date();
    }
}
