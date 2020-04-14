import React from 'react';
import { shallow } from 'enzyme';
import LodingPage from '../../components/LoadingPage';
import { LoginPage } from '../../components/LoginPage';


test('should correctly render LoadingPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});