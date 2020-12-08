export class Post {
  constructor(
    public name: string,
    public date: string,
    public content: string,
    public id?: number
  ) {}
}
