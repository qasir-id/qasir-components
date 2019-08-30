import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import { Badge } from "../badge";

describe('Badge component snapshot', () => {
    test ('should match', () => {
        const component = renderer.create(<Badge count={38}  />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Badge', () => {
    test("should match text with count", () => {
        const badge = shallow(<Badge count={38} />);
        expect(badge.text()).toEqual('38');
    });
    
    test("should not match text with count, text should not be displayed", () => {
        const badge = shallow(<Badge count={38} dot={true} />);
        expect(badge.text()).toEqual('');
    });

    test("should hide when count is 0", () => {
        const badge = mount(<Badge count={0} />);
        expect(badge.find('.qasir-badge').exists()).toEqual(false);
    });

    test("should be shown when count is 0", () => {
        const badge = mount(<Badge count={0} showWhenZero={true} />);
        expect(badge.find('.qasir-badge').exists()).toEqual(true);
    });
});
