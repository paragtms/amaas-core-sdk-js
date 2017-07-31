import EODBook from './eodBook.js'

describe('EODBook', () => {
    describe('constructor', () =>{
        it('should construct', () => {
            const eodBookTest = new EODBook ({
                assetManagerId: 'testAMId',
                utcCloseTime: 'testTime',
                bookId: 'testBookId',
                eodBookStatus: 'testStatus'
            })
            
            expect(eodBookTest.assetManagerId).toEqual('testAMId')
            expect(eodBookTest.utcCloseTime).toEqual('testTime')
            expect(eodBookTest.bookId).toEqual('testBookId')
            expect(eodBookTest.eodBookStatus).toEqual('testStatus')
        })
    })

    describe('stringify', () => {
        it('should return the correct oject from JSON.stringify', () => {
            const testEOD = new EODBook({
                assetManagerId: '123',
                utcCloseTime: 'testCloseTime',
                createdBy: 'tester'
            })
            const expectedObj = {
                assetManagerId: '123',
                utcCloseTime: 'testCloseTime',
                createdBy: 'tester',
                updatedBy: 'TEMP', 
                version: 1
            }
            expect(JSON.parse(JSON.stringify(testEOD))).toEqual(expect.objectContaining(expectedObj))
        })
    })
})