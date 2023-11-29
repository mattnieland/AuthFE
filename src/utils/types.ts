export enum AccountStatus {
    PENDING = 'pending',
    VERIFIED = 'verified',
    BANNED = 'banned',
}

export enum Role {
    USER = 'user',
    LEADER = 'leader',
    GUEST = 'guest',
    ADMIN = 'admin',
}

export enum Providers {
    Google = 'google',
    Facebook = 'facebook',
    Local = 'local'
}

export interface User {
    uuid: string
    createdAt: string
    updatedAt: string
    provider: Providers
    email: string
    firstName: string
    lastName: string
    image: string
    role: Role
    status: AccountStatus
}

export interface Room {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    description: string
    isPublic: boolean
    users: User[]
    mods: User[]
    owner: User
    messages: Message[]
    invitations: Invitation[]
}

export interface Message {
    id: string
    createdAt: string
    updatedAt: string
    text: string
    edited: boolean
    author: {
        id: string
        displayName: string
    }
    room: {
        id: string
        name: string
    }
}

export interface Invitation {
    id: string
    createdAt: string
    updatedAt: string
}