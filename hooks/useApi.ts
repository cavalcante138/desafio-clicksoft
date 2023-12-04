import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import api from '../services/api';

export interface Post {
    user: User;
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface PostSubmit {
    title: string;
    body: string;
    userId: string;
    user: User;
}

export interface User {
    id: string;
    name: string;
    username?: string;
    email?: string;
    address?: {
        street?: string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: {
            lat?: string;
            lng?: string;
        };
    };
    phone?: string;
    website?: string;
    company?: {
        name?: string;
        catchPhrase?: string;
        bs?: string;
    };
}

const useApi = () => {
    const [posts, setPosts] = useState<Post[]>([]);// <Users[] | null> is the type of the data state
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);// <Users[] | null> is the type of the data state
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            setLoading(true);
            const users = await api.get('/users');
            const response = await api.get('/posts');
            const posts = response.data.map((post: Post) => {
                const user = users.data.find((user: User) => user.id === post.userId);
                return { ...post, user: user };
            });
            setPosts(posts);
        } catch (error: any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const getUser = async (id: string) => {
        try {
            setLoading(true);
            const response = await api.get(`/users/${id}`);
            setUser(response.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const createPost = async (post: PostSubmit) => {
        try {
            setLoading(true);
            const response = await api.post('/posts', post);
            setPosts([{
                id: response.data.id,
                title: post.title,
                body: post.body,
                userId: post.userId,
                user: post.user
            }, ...posts]);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const editPost = async (post: Post) => {
        try {
            setLoading(true);
            const response = await api.put(`/posts/${post.id}`, post);
            const index = posts.findIndex((p: Post) => p.id === post.id);
            let postsUpdated = [...posts];
            postsUpdated[index] = post;
            setPosts([...postsUpdated]);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const deletePost = async (id: string) => {
        try {
            setLoading(true);
            const response = await api.delete(`/posts/${id}`);
            posts.splice(posts.findIndex((post: Post) => post.id === id), 1);
            setPosts([...posts]);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { posts, getPosts, createPost, deletePost, getUser, user, error, loading, editPost };
};

export default useApi;
