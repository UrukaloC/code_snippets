export class DataTest {
  $key: string;
  title?: string;
  notes?: string;
  programmL?: string;
  date?: Date;
  code?: string;
  isPrivate?: boolean;
  userId?: string;
  author?: string;

  constructor() {
    this.$key = null;
    this.title = null;
    this.notes = null;
    this.programmL = null;
    this.date = null;
    this.code = null;
    this.isPrivate = false;
    this.userId = null;
    this.author = null;
  }
}
