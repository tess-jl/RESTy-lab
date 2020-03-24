import React from 'react'; 
import { shallow } from 'enzyme';
import RESTy from './RESTy.js';


jest.mock('../services/fetchWithError.js');

describe('Postman container', () => {
  it('can fetch from an api and set state', () => {
    const wrapper = shallow(<RESTy />);
    const postmanContainer = wrapper.instance();
    return postmanContainer.handleSubmit({ preventDefault: () => {} })
      .then(() => {
        expect(wrapper.state('responseBody')).toEqual(JSON.stringify({ responseBody:'json' }, null, 2));
      });
  });
});
