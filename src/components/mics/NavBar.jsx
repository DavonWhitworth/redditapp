import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Segmented, Card } from "antd";

export default function NavBar() {
  const { appData, setAppData } = useContext(AppContext);

  const setSortType = (value) => {
    switch (value) {
      case "Hot":
        setAppData((prevState) => ({ ...prevState, sortType: "hot" }));
        break;
      case "New":
        setAppData((prevState) => ({ ...prevState, sortType: "new" }));
        break;
      case "Top":
        setAppData((prevState) => ({ ...prevState, sortType: "top" }));
        break;
      case "Rising":
        setAppData((prevState) => ({ ...prevState, sortType: "rising" }));
        break;
      default:
        setAppData((prevState) => ({ ...prevState, sortType: "now" }));
    }
  };

  const setSortTime = (value) => {
    switch (value) {
      case "Now":
        setAppData((prevState) => ({ ...prevState, sortTime: "hour" }));
        break;
      case "Today":
        setAppData((prevState) => ({ ...prevState, sortTime: "day" }));
        break;
      case "This Week":
        setAppData((prevState) => ({ ...prevState, sortTime: "week" }));
        break;
      case "This Month":
        setAppData((prevState) => ({ ...prevState, sortTime: "month" }));
        break;
      case "This Year":
        setAppData((prevState) => ({ ...prevState, sortTime: "year" }));
        break;
      case "All Time":
        setAppData((prevState) => ({ ...prevState, sortTime: "all" }));
        break;
      default:
        setAppData((prevState) => ({ ...prevState, sortTime: "day" }));
    }
  };

  return (
    <Card width="auto">
      <Segmented
        defaultValue={appData.sortTime}
        options={["Hot", "New", "Top", "Rising"]}
        onChange={(value) => setSortType(value)}
      />
      <br />
      <Segmented
        defaultValue={appData.sortTime}
        options={[
          "Now",
          "Today",
          "This Week",
          "This Month",
          // "This Year",
          "All Time",
        ]}
        onChange={(value) => setSortTime(value)}
        hidden={appData.sortType !== "top"}
      />
    </Card>
  );
}
