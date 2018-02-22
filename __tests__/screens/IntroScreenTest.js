import 'react-native';
import React from 'react';
//IMPORT COMPONENTS
import introscreen from '../../src/screens/introscreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('introscreen component',()=>{

  it('should run a test to check', ()=>{
    const introscreencomponent = renderer.create(<introscreen/>).toJSON();
    expect(introscreencomponent).toMatchSnapshot();
  });
});
