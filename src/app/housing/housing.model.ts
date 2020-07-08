import { Moment } from 'moment';

export interface IHousing {
    id?: number;
    title?: string;
    reference?: string;
    price?: number;
    surface?: number;
    unit?: string;
    bedrooms?: string;
    floor?: string;
    rooms?: string;
    furnished?: boolean;
    garage?: boolean;
    description?: string;
    available?: boolean;
    status?: string;
    bathrooms?: string;
    user?: User;
    type?: Type;
    address?: String;
    latlng?: String;
    createdAt?: Moment;
    updatedAt?: Moment;
}

export class Housing implements IHousing {
    constructor(
        public id?: number,
        public title?: string,
        public reference?: string,
        public price?: number,
        public surface?: number,
        public unit?: string,
        public bedrooms?: string,
        public floor?: string,
        public rooms?: string,
        public furnished?: boolean,
        public garage?: boolean,
        public description?: string,
        public available?: boolean,
        public status?: string,
        public bathrooms?: string,
        public user?: User,
        public type?: Type,
        public address?: String,
        public latlng?: String,
        public createdAt?: Moment,
        public updatedAt?: Moment
    ) { }
}

export class User {
    constructor(
        public id?: number,
        public full_name?: string,
        public email?: string,
        public phone?: string
    ) { }
}

export class Type {
    constructor(
        public id?: number,
        public label?: string,
        public description?: string
    ) { }
}

export class Location {
    constructor(
        public label?: string,
        public description?: string,
        public latlng?: string,
    ) { }
}
