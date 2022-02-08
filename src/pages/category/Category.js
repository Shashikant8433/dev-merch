import React from "react";

import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Radio,
  Checkbox,
  Slider,
} from "@mui/material";

import {
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { TextRating } from "../../components/utils";
import { VerticalCard } from "../../components";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const drawerWidth = 270;

export default function Category() {
  const [drawerState, setDrawerState] = React.useState({
    left: false,
    isOpen: false,
  });

  const [selectedPriceFilter, setSelectedPriceFilter] =
    React.useState("PRICE-HIGH-TO-LOW");

  const [includeOutOfStock, setIncludeOutOfStock] = React.useState(true);

  const [fastDeliveryOnly, setFastDeliveryOnly] = React.useState(false);

  const [rangeValue, setRangeValue] = React.useState([0, 10_000]);
  const minDistance = 1000;

  const [ratingFilter, setRatingFilter] = React.useState({
    aboveFour: false,
    aboveThree: false,
    aboveTwo: false,
    aboveOne: false,
  });

  const handleRangeChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRangeValue([
        Math.min(newValue[0], rangeValue[1] - minDistance),
        rangeValue[1],
      ]);
    } else {
      setRangeValue([
        rangeValue[0],
        Math.max(newValue[1], rangeValue[0] + minDistance),
      ]);
    }
  };

  const handlePriceFilter = (event) => {
    setSelectedPriceFilter(event.target.value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ maxWidth: "100%" }}
    >
      <List>
        <ListItem
          title={"Price - High to Low"}
          dense
          button
          onClick={() => setSelectedPriceFilter("PRICE-HIGH-TO-LOW")}
        >
          <ListItemIcon>
            <Radio
              checked={selectedPriceFilter === "PRICE-HIGH-TO-LOW"}
              onChange={handlePriceFilter}
              value="PRICE-HIGH-TO-LOW"
              name="radio-buttons"
              inputProps={{ "aria-label": "Price - High to Low" }}
            />
          </ListItemIcon>
          <ListItemText primary={"Price - High to Low"} />
        </ListItem>
        <ListItem
          title={"Price - Low to High"}
          dense
          button
          onClick={() => setSelectedPriceFilter("PRICE-LOW-TO-HIGH")}
        >
          <ListItemIcon>
            <Radio
              checked={selectedPriceFilter === "PRICE-LOW-TO-HIGH"}
              onChange={handlePriceFilter}
              value="PRICE-LOW-TO-HIGH"
              name="radio-buttons"
              inputProps={{ "aria-label": "Price - Low to High" }}
            />
          </ListItemIcon>
          <ListItemText primary={"Price - Low to High"} />
        </ListItem>
        <Divider />
        <ListItem
          dense
          title={"Price - Range"}
          sx={{ textAlign: "center", marginBottom: "16px" }}
        >
          <ListItemText primary={"Price - Range"} />
        </ListItem>
        <ListItem dense title={"Price - Range"}>
          <ListItemText
            sx={{ margin: "4px 4px 4px 20px" }}
            primary={
              <Slider
                getAriaLabel={() => "Price range"}
                value={rangeValue}
                onChange={handleRangeChange}
                valueLabelDisplay="on"
                getAriaValueText={() => "Price-range"}
                max={10_000}
                min={0}
                step={500}
                disableSwap
              />
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          title={"Include Out of Stock"}
          dense
          button
          onClick={(e) => {
            setIncludeOutOfStock((prev) => !prev);
          }}
        >
          <ListItemIcon>
            <Checkbox checked={includeOutOfStock} />
          </ListItemIcon>
          <ListItemText primary={"Include Out of Stock"} />
        </ListItem>
        <ListItem
          title={"Fast Delivery Only"}
          dense
          button
          onClick={(e) => {
            setFastDeliveryOnly((prev) => !prev);
          }}
        >
          <ListItemIcon>
            <Checkbox checked={fastDeliveryOnly} />
          </ListItemIcon>
          <ListItemText primary={"Fast Delivery Only"} />
        </ListItem>
        <Divider />
        <ListItem
          title={"4★ and Above"}
          dense
          button
          onClick={(e) => {
            setRatingFilter((prev) => ({
              ...prev,
              aboveFour: !prev.aboveFour,
            }));
          }}
        >
          <ListItemIcon>
            <Checkbox checked={ratingFilter?.aboveFour} />
          </ListItemIcon>
          <ListItemText primary={<TextRating value={4} />} />
        </ListItem>
        <ListItem
          title={"3★ and Above"}
          dense
          button
          onClick={(e) => {
            setRatingFilter((prev) => ({
              ...prev,
              aboveThree: !prev.aboveThree,
            }));
          }}
        >
          <ListItemIcon>
            <Checkbox checked={ratingFilter?.aboveThree} />
          </ListItemIcon>
          <ListItemText primary={<TextRating value={3} />} />
        </ListItem>
        <ListItem
          title={"2★ and Above"}
          dense
          button
          onClick={(e) => {
            setRatingFilter((prev) => ({
              ...prev,
              aboveTwo: !prev.aboveTwo,
            }));
          }}
        >
          <ListItemIcon>
            <Checkbox checked={ratingFilter?.aboveTwo} />
          </ListItemIcon>
          <ListItemText primary={<TextRating value={2} />} />
        </ListItem>
        <ListItem
          title={"1★ and Above"}
          dense
          button
          onClick={(e) => {
            setRatingFilter((prev) => ({
              ...prev,
              aboveOne: !prev.aboveOne,
            }));
          }}
        >
          <ListItemIcon>
            <Checkbox checked={ratingFilter?.aboveOne} />
          </ListItemIcon>
          <ListItemText primary={<TextRating value={1} />} />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      {!drawerState.isOpen && (
        <IconButton
          size="medium"
          style={{
            position: "fixed",
            top: "50%",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "solid .5px #f2f8ff",
            zIndex: "1",
          }}
          onClick={toggleDrawer("left", true)}
        >
          <ChevronRightIcon fontSize="medium" />
        </IconButton>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor={"left"}
        open={drawerState["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <DrawerHeader>
          Sort &amp; Filter
          <IconButton color={"error"} onClick={toggleDrawer("left", false)}>
            <CloseIcon fontSize={"small"} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list("left")}
      </Drawer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <VerticalCard
          product
          imageLink={"https://picsum.photos/500/450"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/900/700"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/580/600"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/945/600"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/100/900"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/200/400"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/200/300"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/200/500"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/700/600"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/500/700"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/890/700"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/900/500"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
      </div>
    </>
  );
}
