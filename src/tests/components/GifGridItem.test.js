import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Testing GifGridItem component', () => {
  const props = {
    title: 'Dummy title',
    url: 'https://localhost/dummy.jpg',
  };
  const wrapper = shallow(<GifGridItem {...props} />);

  GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  test('Must show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must be a p with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(props.title);
  });

  test('Must have the img like the props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(props.url);
    expect(img.prop('alt')).toBe(props.title);
  });

  test('Must have animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBeTruthy();
  });
});
