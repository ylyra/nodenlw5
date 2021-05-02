import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  created_at: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { User }