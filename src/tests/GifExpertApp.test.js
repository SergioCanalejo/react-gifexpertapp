const { shallow } = require('enzyme');
const { default: GifExperApp } = require('../GifExpertApp');
const React = require('react');

describe('Testing GifExpertApp', () => {
  const defaultCategories = ['One Piece'];

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Must show the app correctly', () => {
    const wrapper = shallow(<GifExperApp defaultCategories={defaultCategories} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have two GifGrids', () => {
    const multipleCategories = ['Dragon Ball', ...defaultCategories];
    const wrapper = shallow(<GifExperApp defaultCategories={multipleCategories} />);
    expect(wrapper.find('GifGrid').length).toBe(multipleCategories.length);
  });
});
