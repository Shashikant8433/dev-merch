import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterIcon from "@mui/icons-material/FilterAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { VerticalCard } from "../..";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-around",
}));

const drawerWidth = 200;

export default function Category() {
  const [state, setState] = React.useState({
    left: false,
    isOpen: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ maxWidth: "100%" }}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {!state.isOpen && (
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
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <DrawerHeader>Sort &amp; Filter</DrawerHeader>
        <Divider />
        {list("left")}
      </Drawer>
      {console.log("rendered")}
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
          imageLink={"https://picsum.photos/900/700"}
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
          imageLink={"https://picsum.photos/900/700"}
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
          imageLink={"https://picsum.photos/900/700"}
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
          imageLink={"https://picsum.photos/900/700"}
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
          imageLink={"https://picsum.photos/900/700"}
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
          imageLink={"https://picsum.photos/600/700"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/300/500"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/300/700"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
        <VerticalCard
          product
          imageLink={"https://picsum.photos/900/600"}
          productName={"Diamond ring"}
          price={1200}
          discountInPercent={16.7}
          fastDelivery={true}
        />
      </div>
    </>
  );
}
