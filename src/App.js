import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {News } from './newsServices'
var dateFormat = require('dateformat');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultCount: 15,
        loopCount: 15,
        hideButton: true,
        list: {},
        searchText: '',
        searchType: '',
        showmenu: false,
        showmenuClass: 'menu-dropdown'
    }
  }
  componentWillMount() {
    this.setState({
      list: News(15)
    })  
  }
  loadMore = () => {
    let count = this.state.loopCount + this.state.defaultCount
    this.setState({
      list: News(count, this.state.searchText, this.state.searchType),
      loopCount: count
    })  
  }


  searchNews = (value, searchType) => {
    let count = this.state.defaultCount
    this.setState({
      searchText: value,
      searchType: searchType,
      list: News(count, value, searchType)
    })
    this.showMenu()
  }
  showMenu = () => {
    this.setState({
      showmenuClass: (this.state.showmenuClass === 'menu-dropdown')? '' : 'menu-dropdown'
    })
  }


  render() {
    let arrData = this.state.list.arrData
    let hideButton = (arrData.length < this.state.list.lengthData )? true : false
    return (
      <div className="App">
        <header className="App-header">
        <div className="container bg-menu">
          <div className="d-flex no-gutters margin-l-15 justify-content-around align-self-baseline">
            <div className="col text-left align-self-baseline"><img src={logo} className="App-logo" alt="logo" /></div>
            <div className="col-8 col-md-11 col-sm-10 pr-3 align-self-baseline">
              
              <div className="text-center text-sm-right">
                <div className="menu"><div id="lblNews"  onClick={() => this.searchNews('','')}>News</div></div>
                <div className={"menu "+ this.state.showmenuClass}>
                  <div id="lblRegions"  onClick={() => this.searchNews('Regions', 'type')}>Regions</div>
                  <div id="lblVideo"  onClick={() => this.searchNews('Video', 'type')}>Video</div>
                  <div id="lblTv"  onClick={() => this.searchNews('Tv', 'type')}>TV</div>
                  <div className="search"><input type="text" className="form-control d-none d-sm-block" onChange={(e) => this.searchNews(e.target.value,'content')} placeholder="Search"/></div>
                </div>
              </div>
            </div>
            <div className="col pr-3 text-right align-self-baseline d-block d-md-none"><div className="navbar-dark" onClick={this.showMenu}><span className="navbar-toggler-icon"></span></div></div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="search-mobile d-block d-md-none"><input type="text" onChange={(e) => this.searchNews(e.target.value,'content')} className="form-control" placeholder="Search"/></div>    
        </div>
        
        </header>
        <div className="container">
          <div className="row">
          
          {arrData.map((v,i) => {
                return  (<div key={i}  className="col-12 col-sm-4">
                <div className="news">
                  <div className="title d-none d-sm-block">{v.title}</div>
                  <div className="p-0 col-5 col-sm-12"><img src={v.imageUrl} alt="" /></div>
                  <div className="pl-2 pl-sm-0 p-0 col-7 col-sm-12">
                    <div className="title mobile">{v.title}</div>
                    <div className="">{v.content}</div>
                    <div className="updated small">Updated: {dateFormat(v.updateDate ,'mmmm d, yyyy HH:MM')}</div>
                  </div>
                </div>
              </div>)
            })
          }
          </div>
          {hideButton && <div id="loadmore" className="loadmore"><button className="btn  btn-outline-secondary" onClick={this.loadMore}>Load More</button></div>}
        </div>
      <div className="footer d-none d-sm-block">
      <div className="container">
          <div className="row">
            <div className="col-9">
              <ul className="list-inline footer-menu">
                <li className="list-inline-item" onClick={() => this.searchNews('','')}>News</li>
                <li className="list-inline-item" onClick={() => this.searchNews('Regions', 'type')}>Regions</li>
                <li className="list-inline-item" onClick={() => this.searchNews('Video', 'type')}>Video</li>
                <li className="list-inline-item" onClick={() => this.searchNews('TV1', 'type')}>TV</li>
              </ul>      
            </div>
            <div className="col-3">
                <div className="text-right small">Copy right © AMPOS</div>
            </div>              
          </div>
        
      </div>



      </div>
    </div>
    );
  }
}

export default App;
