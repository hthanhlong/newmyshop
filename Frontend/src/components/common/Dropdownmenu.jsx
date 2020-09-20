import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@material-ui/core";

export default function DropDownMenu(props) {
  const { title, dataList } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Typography
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {title}
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ top: 62, left: -5, width: "15rem", backgroundColor: "red" }}
      >
        {!dataList
          ? ""
          : dataList.map((x, index) => (
              <MenuItem key={index}>{x.name}</MenuItem>
            ))}
      </Menu>
    </Box>
  );
}
