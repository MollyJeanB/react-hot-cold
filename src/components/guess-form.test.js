import React from "react";
import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("submits form", () => {
    const wrapper = shallow(<GuessForm />);
    wrapper.find("button").simulate("click");
  });
  it("calls onSubmit when button is clicked", () => {
    const callback = jest.fn();
    const preventDefault = jest.fn();
    const value = 2;
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const inputValue = (wrapper.find("input").instance().value = value);
    wrapper.simulate("submit", { preventDefault });
    expect(callback).toHaveBeenCalledWith(value.toString());
  });
});
