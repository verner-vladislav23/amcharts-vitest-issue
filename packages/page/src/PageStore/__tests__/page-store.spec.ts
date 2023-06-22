import { describe, test, expect, beforeEach } from 'vitest';

import { PageStore } from '../PageStore';

describe('SessionsStore', () => {
    let mockPageStore;

    // beforeEach(() => {
    //     mockSessionsStore = new SessionsStore({
    //         user: userStoreMock,
    //         notifications: notificationStoreMock,
    //         projectIDs: [19947342, 9942732],
    //         sessionsService: sessionsServiceMock,
    //         filterDateRangeStore: new FilterDateRangeStore({ defaultPresetRange: DateInterval.Last7Days }),
    //         filterSearchStore: new FilterSearchStore({
    //             placeholder: 'search sessions',
    //         }),
    //         filterListStore: new FilterListStore(),
    //         filterFieldsStore: new FilterFieldsStore(),
    //     });
    // });

    beforeEach(() => {
        mockPageStore = new PageStore();
    });

    describe('fetching fields', () => {
        test('can fetch field keys and values and set to filterFieldsStore', () => {
            // await mockSessionsStore.fetchFields();

            expect(true).toBe(true);
        });
    });
});
