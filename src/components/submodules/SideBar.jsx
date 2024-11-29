import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from "@mui/material";

function SideBar() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Sidebar App
          </Typography>
        </Toolbar>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          centered
        >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>

      <Box sx={{ padding: 2 }}>
        {currentTab === 0 && <Typography>Welcome to the Home Page!</Typography>}
        {currentTab === 1 && <Typography>About us content goes here.</Typography>}
        {currentTab === 2 && <Typography>Feel free to Contact us.</Typography>}
      </Box>
    </Box>
  );
}

export default SideBar;
