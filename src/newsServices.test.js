import React from 'react';
import ReactDOM from 'react-dom';
import { News } from './newsServices'



it('#1 First time loading --> Success --> Page 15 Expect 15 records', () => {
    let recordNo = 15;
    let expectNo = 15;
    const dataNews = News(recordNo);
    if(dataNews.arrData !== null)
        expect(dataNews.arrData.length).toBe(expectNo);
    else
        expect(false);
  });

  it('#2 Loadmore loading --> Success --> Expect 30 records', () => {
    let recordNo = 30;
    let expectNo = 30;
    const dataNews = News(recordNo);
    expect(dataNews.arrData.length).toBe(expectNo);
  });

  it('#3 Loadmore loading --> Success --> Input 100 but Expect 49 records', () => {
    let recordNo = 100;
    let expectNo = 49;
    const dataNews = News(recordNo);
    expect(dataNews.arrData.length).toBe(expectNo);
  });

  it('#4 Search First time --> Success --> Input "Test Search #4" expect 10 ', () => {
    let recordNo = 15;
    let expectNo = 10;
    const dataNews = News(recordNo, 'Test Search #4', 'content');
    expect(dataNews.arrData.length).toBe(expectNo);
  });

  it('#5 Search load more--> Success --> Input "Test Search #5" expect 17 ', () => {
    let recordNo = 30;
    let expectNo = 17;
    const dataNews = News(recordNo, 'Test Search #5', 'content');
    expect(dataNews.arrData.length).toBe(expectNo);
  });

  it('#6 Regions tab --> Success --> Input "Regions" and "Type" expect 5 ', () => {
    let recordNo = 30;
    let expectNo = 5;
    const dataNews = News(recordNo, 'Regions', 'type');
    expect(dataNews.arrData.length).toBe(expectNo);
  });

