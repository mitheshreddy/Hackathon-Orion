// Make Enzyme functions available in all test files without importing
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('dir', 'ltr');
