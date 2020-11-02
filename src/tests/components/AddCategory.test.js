import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Testing AddCategory component', () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Must show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must change textbox', () => {
    simulateChange();
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe('Hello World!');
  });

  test('Not sumbit de form', () => {
    simulateSubmit();
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Submit have to be called', () => {
    simulateChange();
    simulateSubmit();
    expect(setCategories).toHaveBeenCalledTimes(1);
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe('');
  });

  const simulateChange = () => {
    const input = wrapper.find('input');
    const event = { target: { value: 'Hello World!' } };
    input.simulate('change', event);
  };

  const simulateSubmit = () => {
    const form = wrapper.find('form');
    const event = { preventDefault() {} };
    form.simulate('submit', event);
  };
});
