export enum AccessType {
    PRIVATE = 'private',
    PUBLIC = 'public'
}

export interface Rating {
    id: number;
    rate:  number;
    count: number;
    access?: AccessType
}