//type 
//유니온타입 
type Lang = 'korea' | 'japan' | 'china' | 'denmark'

const code: Lang = 'a'
const code2: lang = 'g' // err 


const KOREA = 'korea'
const CHINA = 'china'
const JAPAN = 'japan'
const DENMARK = 'denmark'

type Lang2 = typeof KOREA | typeof CHINA | typeof JAPAN | typeof DENMARK

function test(params: Lang) {
    console.log(params)

}
test(CHINA);
test(KOREA);
test('korea');
test('korea');
test('korea');
test('korea');
test('korea');



//ENUM

enum Lang3 {
    KOREA = 'korea',
    CHINA = 'china',
    JAPAN = 'japan',
    DENMARK = 'denmark'
}

function test2(params: Lang3) {
    console.log(params)

}
test(Lang3.KOREA)