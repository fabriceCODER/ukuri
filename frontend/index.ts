export interface User {
     id: string;
     email: string;
     username: string;
   }
   
   export interface AuthResponse {
     token: string;
     user: User;
   }
   
   export interface Article {
     id: string;
     title: string;
     content: string;
     authorId: string;
     createdAt: string;
     updatedAt: string;
   }
   
   export interface Comment {
     id: string;
     content: string;
     articleId: string;
     authorId: string;
     createdAt: string;
   }
   
   export interface Like {
     id: string;
     articleId: string;
     userId: string;
   }
   
   export interface Credentials {
     email: string;
     password: string;
   }
   
   export interface RegisterData {
     email: string;
     password: string;
     username: string;
   }