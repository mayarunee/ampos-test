import jsonQuery from 'json-query'
let data = require('./news.json');

export function News(no,searchVal,dataType) {

    let jData = {}
    let dataNews = {
        arrData: [],
        lengthData: 0
    }
    if(searchVal){
        if(searchVal !== '') {
            jData.articles = jsonQuery('articles[*'+dataType+'~/'+searchVal+'/i]', {
                data: data,
                allowRegexp: true
            }).value         
        } else {
            jData = data
        }
    }
    else{
        jData = data
    }

    jData.articles.sort(function(a,b){
        var c = new Date(a.updateDate);
        var d = new Date(b.updateDate);
        return d-c;
    });

    
    jData.articles.map((v, i) => {
        if(i < no) {
            dataNews.arrData.push(v)
        }
    })
    dataNews.lengthData = jData.articles.length
    return dataNews
    
}
