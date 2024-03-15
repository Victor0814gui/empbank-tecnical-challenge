import { SharedEntity } from "./SharedEntity";

export class Assistant extends SharedEntity {
  name!: string;
  email!: string;
  phone!: number;
  password!: string;
  avatar_url!: string;
}
