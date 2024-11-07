// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}