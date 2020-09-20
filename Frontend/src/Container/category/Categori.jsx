import React from "react";
import Banner from "../../components/common/banner/Banner";
import { Box } from "@material-ui/core";

const Category = (props) => {
  console.log("categori", props);
  return (
    <Box>
      <Banner content="Category" />
    </Box>
  );
};

export default Category;
