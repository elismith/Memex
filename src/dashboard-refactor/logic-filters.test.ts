import expect from 'expect'
import {
    parseSearchQuery,
    constructQueryString,
    syncQueryStringFilters,
} from './logic-filters'
import TEST_DATA from './logic-filters.test.data'

// parsing tests
describe('Search query string parsion logic', () => {
    for (const { queryString, parsedQuery } of TEST_DATA) {
        if (!parsedQuery) continue
        it(`Should accurately parse the string "${queryString}" into search terms and filters`, () => {
            const searchDetailArray = parseSearchQuery(queryString)
            // if (!parsedQuery) {
            //     expect(searchDetailArray).toBeNull()
            // }
            expect(searchDetailArray).toEqual(parsedQuery)
        })
    }
})

// construct string tests
describe('Search query string construction logic', () => {
    for (const { queryString, parsedQuery } of TEST_DATA) {
        if (!parsedQuery) continue
        it(`Should accurately return the string "${queryString}" from its parsed query array`, () => {
            const constructedString = constructQueryString(parsedQuery)
            if (typeof constructedString === 'undefined') {
                expect(queryString).toBeNull()
            }
            expect(constructQueryString).toEqual(queryString)
        })
    }
})

// filter mutations

describe('Filter parsing logic', () => {
    for (const {
        queryString,
        filtersData: { updatedFilters, newQuery },
    } of TEST_DATA) {
        it(`Should correctly update the query string to '${newQuery}'`, () => {
            const resultString = syncQueryStringFilters(
                queryString,
                updatedFilters,
            )
            expect(resultString).toEqual(newQuery)
        })
    }
})