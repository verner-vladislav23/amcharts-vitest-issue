import { createFilter } from '@packages/components';

export class PageStore {
    public filter: unknown;

    constructor() {
        this.filter = createFilter();
    }
}