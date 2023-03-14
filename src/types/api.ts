import type { NextApiRequest, NextApiResponse } from 'next'

import { PostsFilterType } from '.';

export type ResponseData = {
  data?: any;
  message: string;
  error?: any;
}

export interface PostsApiRequest extends NextApiRequest {
    body: {
      content: string
      authorId: string
      image?: string
      authorEmail: string
    };
    query: {
      q: PostsFilterType
      id: string
    }
}

export interface UserApiRequest extends NextApiRequest {
    query: {
      id: string
    };
    body: {
      username: string;
      email: string;
      password: string;
    }
}

export interface CommentsApiRequest extends NextApiRequest {
  
}

export interface LikesApiRequest extends NextApiRequest {
  
}