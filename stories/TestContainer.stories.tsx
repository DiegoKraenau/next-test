import React from "react";
import { TestContainer } from "../pages/components/TestContainer";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Test/TestContainer",
  component: TestContainer,
};

const Template: ComponentStory<typeof TestContainer> = (args) => (
  <TestContainer {...args}></TestContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Test",
};
