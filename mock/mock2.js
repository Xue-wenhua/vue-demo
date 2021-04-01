import Mock from 'mockjs'
// import Random from 'mockjs'
export default {
    datalist: () => {
        const list = Mock.mock({
            "placeholder|5": [
                {
                    "boolean": '@boolean(2,3,true)',
                    "natural1": '@natural(10)',
                    "natural2": '@natural(1,10)',
                    "integer1": '@integer(5)',
                    "integer2": '@integer(-1,1)',
                    "float1": '@float(1,10)',
                    "float2": '@float(1,10,1)',
                    "float3": '@float(1,10,1,3)',
                    "character1": '@character("lower")',
                    "character2": '@character("upper")',
                    "character3": '@character("number")',
                    "character4": '@character("symbol")',
                    "character5": '@character("Hello@1")',
                    "string1": '@string("lower",3,5)',
                    "string2": '@string("qrwert",4)',
                    "string3": '@string("qrwert")',
                    "range1": '@range(5)',
                    "range2": '@range(5,10)',
                    "range3": '@range(2,10,2)',
                    "date1": '@date()', 
                    "date2": '@date(yy-MM-dd)',
                    "date3": '@date(y-MM-dd)', 
                    "date4": '@date(y-M-d)',
                    "time1": '@time()',
                    "time2": '@time(A HH:mm:ss)',
                    "time3": '@time(a HH:mm:ss)',
                    "time4": '@time(H:m:s)',
                    "time5": '@time(h)',
                    "datetime": '@datetime()',
                    "now1": '@now("day")',
                    "now2": '@now("week","yy-MM-dd h")',
                    "color1": '@color()',
                    "color2": '@rgb()',
                    "color3": '@rgba()',
                    "image1": '@image()',
                    "image2": '@image("200x100", "#894FC4", "#FFF", "png", "Hello World")',
                    "dataImage1": '@dataImage()',
                    "dataImage2": '@dataImage("200x100")',
                    "dataImage3": '@dataImage("200x100","Hello World")',
                    "paragraph1": '@paragraph()',
                    "paragraph2": '@paragraph(2)',
                    "paragraph3": '@paragraph(1,3)',
                    "sentence1": '@sentence()',
                    "sentence2": '@sentence(5)',
                    "sentence3": '@sentence(3,5)',
                    "word1": '@word()',
                    "word2": '@word(5)',
                    "word3": '@word(3,5)',
                    "cparaprahph": '@cparagraph()',
                    "csentence": '@csentence()',
                    "cword": '@cword()',
                    "first": '@first()',
                    "last": '@last()',
                    "name1": '@name()',
                    "name2": '@name(true)',
                    "cname": '@name()',
                    "url": '@url()',
                    "email": '@email()',
                    "province": '@province()',
                    "city1": '@city()',
                    "city2": '@city(true)',
                    "county1": '@county()',
                    "county2": '@county(true)',
                    "mix": '@image("200x100", "@color", "#FFF","@word")'
                }
            ]
        })
        return {
            code: 20000,
            data: list
        }
    }
}
