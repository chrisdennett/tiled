import React from "react";
import styled from "styled-components";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import { TabBar, Tab } from "@rmwc/tabs";

const TabControls = ({ activeTab, onUpdate }) => {
  return (
    <div>
      <StyledTabBar
        activeTabIndex={activeTab}
        onActivate={e => onUpdate(e.detail.index)}
      >
        <Tab>Tiles</Tab>
        <Tab>Size</Tab>
        <Tab>Grout</Tab>
      </StyledTabBar>
    </div>
  );
};

export default TabControls;

// styles
const StyledTabBar = styled(TabBar)`
  .mdc-tab .mdc-tab__text-label {
    color: #fff;
  }

  .mdc-tab--active .mdc-tab__text-label {
    /* color: #fff; */
  }

  .mdc-tab-indicator .mdc-tab-indicator__content--underline {
    border-top-width: 3px;
  }
  .mdc-tab-indicator .mdc-tab-indicator__content--underline {
    border-color: #fff;
  }
`;
