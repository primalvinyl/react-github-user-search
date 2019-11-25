import * as actions from '.';

describe('actions', () => {
    it('getUserList returns an action object', () => {
        const searchTerms = { searchText: 'dingo', searchFilter: 'bling' };
        const expectedResult = {
            type: actions.GET_USER_LIST,
            data: searchTerms
        };
        const actualResult = actions.getUserList(searchTerms);
        expect(actualResult).toEqual(expectedResult);
    })
})
