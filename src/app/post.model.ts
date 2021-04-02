export default class Post {
    public loveVoteCount: number;
    constructor(public id: number, public title: string, public content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.loveVoteCount = 0;
    }
}
