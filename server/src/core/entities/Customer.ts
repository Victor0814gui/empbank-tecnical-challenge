import { SharedEntity } from "./SharedEntity";

export class Customer extends SharedEntity {
  code!: string;
  name!: string;
  network!: string;
  email!: string;
  password!: string;
  avatar_url!: string;
}
