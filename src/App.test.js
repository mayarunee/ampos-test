import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

it('#1 First time loading, renders without crashing --> Success', () => {
  shallow(<App />);
});

it('#2 First time loading News item --> Success expect News, Regions, Video, TV  Menu are displayed', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('#lblNews').length).toBe(1);
  expect(wrapper.find('#lblRegions').length).toBe(1);
  expect(wrapper.find('#lblVideo').length).toBe(1);
  expect(wrapper.find('#lblTv').length).toBe(1);
  
});

it('#3 First time loading --> All state are clarified properly --> Success ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('defaultCount')).toEqual(15)
  expect(wrapper.state('loopCount')).toEqual(15)
});


it('#4 Loadmore --> The Load More button is visible if there is available news  --> Success ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('#loadmore').length).toBe(1);
});

it('#5 Loadmore --> The Load More button is not visible if there is no available news  --> Success ', () => {
  const wrapper = shallow(<App />);
  const submitButton = wrapper.find('#lblTv');
  submitButton.simulate('click');

 // wrapper.update();
  expect(wrapper.find('#loadmore').length).toBe(0); 
});
