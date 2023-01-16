import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { Button, Modal, Card } from "antd";

export default function SubRedditModal() {
  const { appData, setAppData } = useContext(AppContext);

  return (
    <div>
      <Button
        type="primary"
        onClick={() =>
          setAppData((prevState) => ({ ...prevState, modalOpen: true }))
        }
      >
        View Other SubReddits
      </Button>
      <Modal
        title="SubReddits"
        open={appData.modalOpen}
        onOk={() =>
          setAppData((prevState) => ({ ...prevState, modalOpen: false }))
        }
        onCancel={() =>
          setAppData((prevState) => ({ ...prevState, modalOpen: false }))
        }
      >
        <Card>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: null,
                modalOpen: false,
              }))
            }
          >
            All
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "pics",
                modalOpen: false,
              }))
            }
          >
            Pics
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "askreddit",
                modalOpen: false,
              }))
            }
          >
            AskReddit
          </Button>{" "}
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "funny",
                modalOpen: false,
              }))
            }
          >
            Funny
          </Button>{" "}
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "therewasanattempt",
                modalOpen: false,
              }))
            }
          >
            ThereWasAnAttempt
          </Button>{" "}
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "mildlyinteresting",
                modalOpen: false,
              }))
            }
          >
            MildlyInteresting
          </Button>{" "}
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "News",
                modalOpen: false,
              }))
            }
          >
            News
          </Button>{" "}
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "whitepeopletwitter",
                modalOpen: false,
              }))
            }
          >
            WhitePeopleTwitter
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "damnthatsinteresting",
                modalOpen: false,
              }))
            }
          >
            Damnthatsinteresting
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "movies",
                modalOpen: false,
              }))
            }
          >
            Movies
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "gaming",
                modalOpen: false,
              }))
            }
          >
            Gaming
          </Button>
          <Button
            onClick={() =>
              setAppData((prevState) => ({
                ...prevState,
                subReddit: "todayilearned",
                modalOpen: false,
              }))
            }
          >
            TodayILearned
          </Button>
        </Card>
      </Modal>
    </div>
  );
}
