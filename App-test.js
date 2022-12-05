import {getData, readData} from './src/pages/ListingScreen';

test('getData', ()=>{
    expect(getData()).toHaveReturned
});

test('readData', ()=>{
    expect(readData()).nthCalledWith(getData())
});