import * as React from "react";
import { shallow } from "enzyme";
import IndexPage from "../pages/index";

describe("index Page testing", () => {
  const wrap = shallow(<IndexPage />);
  it('App shows "A simple example repo" in a <p> tag', () => {
    expect(wrap.find("#divCheck").text()).toBe("Hello Next.js");
  });

  it("state show null", () => {
    expect(wrap.state("check")).toEqual(null);
  });

  it("fill input data", () => {
    wrap.find("input").simulate("change", {
      target: { value: "value" },
    });

    expect(wrap.state("input")).toEqual("value");
  });
});
