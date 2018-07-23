
import { mount } from "enzyme";
import * as React from "react";

import Page from "../../src/containers/Page";

describe("Page", () => {
  test("changes the score after click in button", () => {
    const page = mount(<Page/>);

    const initialScore: string = page.find("h1").text();
    expect(initialScore).toContain(0);
    page.find("button").simulate("click");

    const finalScore: string = page.find("h1").text();
    expect(finalScore).toContain(1);
  });

  test("changes the score after click in input", () => {
    const page = mount(<Page/>);

    const initialScore: string = page.find("h1").text();
    expect(initialScore).toContain(0);
    page.find("input").simulate("click");

    const finalScore: string = page.find("h1").text();
    expect(finalScore).toContain(1);
  });

  test("resets the score after typing in input", () => {
    const page = mount(<Page/>);

    const initialScore: string = page.find("h1").text();
    expect(initialScore).toContain(0);
    page.find("input").simulate("click");
    page.find("input").simulate("click");
    page.find("input").simulate("keyPress");

    const finalScore: string = page.find("h1").text();
    expect(finalScore).toContain(0);
  });

  test("shows reset message after typing in input", () => {
    const page = mount(<Page/>);

    const initialScore: string = page.find("h1").text();
    expect(initialScore).toContain(0);
    page.find("input").simulate("click");
    page.find("input").simulate("click");
    page.find("input").simulate("keyPress");

    const message: string = page.find("h2").text();
    expect(message).toContain("Previous value was 2");
  });
});
