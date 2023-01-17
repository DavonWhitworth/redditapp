import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Segmented, Card } from "antd";

export default function NavBar() {
  const { appData, setAppData } = useContext(AppContext);

  const setSortType = (value) => {
    switch (value) {
      case "Hot":
        setAppData((prevState) => ({
          ...prevState,
          sortType: "hot",
          pageType: "feed",
        }));
        break;
      case "New":
        setAppData((prevState) => ({
          ...prevState,
          sortType: "new",
          pageType: "feed",
        }));
        break;
      case "Top":
        setAppData((prevState) => ({
          ...prevState,
          sortType: "top",
          pageType: "feed",
        }));
        break;
      case "Rising":
        setAppData((prevState) => ({
          ...prevState,
          sortType: "rising",
          pageType: "feed",
        }));
        break;
      default:
        setAppData((prevState) => ({
          ...prevState,
          sortType: "now",
          pageType: "feed",
        }));
    }
  };

  const setSortTime = (value) => {
    switch (value) {
      case "Now":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "hour",
          pageType: "feed",
        }));
        break;
      case "Today":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "day",
          pageType: "feed",
        }));
        break;
      case "This Week":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "week",
          pageType: "feed",
        }));
        break;
      case "This Month":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "month",
          pageType: "feed",
        }));
        break;
      case "This Year":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "year",
          pageType: "feed",
        }));
        break;
      case "All Time":
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "all",
          pageType: "feed",
        }));
        break;
      default:
        setAppData((prevState) => ({
          ...prevState,
          sortTime: "day",
          pageType: "feed",
        }));
    }
  };

  return (
    <Card width="auto">
      <Segmented
        defaultValue="Hot"
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
