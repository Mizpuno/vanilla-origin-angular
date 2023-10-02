import { User } from "./user.model";

export class Post {
    id?: number
    postTime: string
    community?: string
    topic?: string
    content?: string
    tags?: string[]
    client?: User

    constructor() {
        const currentDate = new Date()

        const formattedDate = `${
        currentDate.getDate().toString().padStart(2, '0')
          }:${(currentDate.getMonth() + 1).toString().padStart(2, '0')
          }:${currentDate.getFullYear().toString()
          }:${currentDate.getHours().toString().padStart(2, '0')
          }:${currentDate.getMinutes().toString().padStart(2, '0')}`;
        
        this.postTime = formattedDate
    }
}