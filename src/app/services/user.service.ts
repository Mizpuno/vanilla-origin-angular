import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { API_URLS } from "./api-urls";
import { DataService } from "./data.service";

@Injectable ({
    providedIn: 'root'
})

export class UserService {
    constructor(
        private dataService: DataService
    ) {}
    
    async loadUsers(username: string): Promise<User | null> {
        const res = await fetch(`${API_URLS.users}/user/${username}`)
        if (res.ok) {
            return res.json()
        }

        console.log("username not found.")
        return null
    }

    async postUser(user: User) {
        const res = await fetch(`${API_URLS.users}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        if (res.ok) {
            this.dataService.setErrorState(false)
            return "create your user successfully."
        }
        else {
            this.dataService.setErrorState(true)
            return "it seem this username already in use."
        }
    }
}