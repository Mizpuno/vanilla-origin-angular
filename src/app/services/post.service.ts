import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { API_URLS } from './api-urls';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    private posts: Post[] = []
    private communities: string[] = []

    async loadPosts(): Promise<Post[]> {
        const res = await fetch(API_URLS.posts);
        if (res.ok) {
            return await res.json();
        }
        return []
    }

    async loadPostByCommunity(community: string | undefined): Promise<Post[]> {
        const res = await fetch(`${API_URLS.postsByCommunity}/${community}`)
        return res.json()
    }

    async loadPostByTimeOrder(): Promise<Post[]> {
        const res = await fetch(`${API_URLS.postsByTimeOrder}`)
        return res.json()
    }

    async loadPostByClientUsername(username: string | undefined): Promise<Post[]> {
        const res = await fetch(`${API_URLS.postByClientUsername}/${username}`)
        return res.json()
    }

    async removePost(id: number) {
        const res = await fetch(`${API_URLS.posts}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    async addPost(post: Post) {
        const res = await fetch(`${API_URLS.posts}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
    }

    getPosts(): Post[] {
        return this.posts;
    }

    getCommunities(): string[] {
        return this.communities;
    }

    
}