export interface INewsletter {
    read(useCache: boolean): Promise<any>;
}