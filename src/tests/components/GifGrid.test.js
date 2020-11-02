import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid component', () => {
  useFetchGifs.mockReturnValue({
    gifs: [],
    loading: true,
  });
  const category = 'One Piece';
  const mockData = [
    {
      id: 'ABC',
      url: 'https://localhost/dummy.jpg',
      title: 'Dummy img',
    },
  ];

  test('Must show the component correctly', () => {
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Must show items from useFetchGifs', () => {
    useFetchGifs.mockReturnValue({ gifs: mockData, loading: false });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(mockData.length);
  });
});
