import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private sharedCommunity = new BehaviorSubject<any>(null)
    private filterPost = new BehaviorSubject<any>(null)
    private switchOffice = new BehaviorSubject<any>(null)
    private logoutState = new BehaviorSubject<any>(null)
    private submitCreate = new BehaviorSubject<any>(null)

    private errorState: boolean = false

    setCommunity(data: string | undefined) {
        this.sharedCommunity.next(data)
    }

    getCommunity() {
        return this.sharedCommunity.asObservable();
    }

    setFilterPost(data: string | undefined) {
        this.filterPost.next(data)
    }

    getFilterPost() {
        return this.filterPost.asObservable();
    }

    setSwitchOffice(data: boolean) {
        this.switchOffice.next(data)
    }

    getSwitchOffice() {
        return this.switchOffice.asObservable();
    }
    
    setLogoutState(data: boolean) {
        this.logoutState.next(data)
    }

    getLogOutState() {
        return this.logoutState
    }
    
    setErrorState(data: boolean) {
        this.errorState = data
    }

    getErrorState() {
        return this.errorState
    }

    setSubmit() {
        this.submitCreate.next(true)
    }

    getSubmit() {
        return this.submitCreate
    }

    
}