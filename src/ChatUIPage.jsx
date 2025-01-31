import React, { useState } from "react";
import { Avatar } from "@mui/material";

export default function ChatUIPage() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className=" chat-container">
        <div className="d-flex">
          <div className="chat-bar">
            <h4 className="text-center text-white mt-2 mb-4">Recent Chats</h4>
            <div className="text-center">
              <button
                className="bbtn btn-primar m-1"
                // onClick={() => setNewChatModal(true)}
              >
                Create New Chat{" "}
              </button>
            </div>
            <h6 className={`chat-name-sidebar `}>Amit Bhatia</h6>
            <h6 className={`chat-name-sidebar `}>Akshay Singh</h6>
          </div>

          <div className="message-box ">
            {true ? (
              <div>
                <div className="d-flex px-2 chat-user-box">
                  <Avatar
                    style={{ height: "37px", width: "37px" }}
                    className="my-1"
                  ></Avatar>

                  <div>
                    <span className="user-name">Amit Bhatia</span>

                    <br />

                    <span className="online-text">online</span>
                  </div>
                </div>{" "}
                <div className="msg-box scrollable-container p-2">
                  <div>
                    <div className="text-center text-secondary fw-light">
                      31 Jan 25
                    </div>
                    <h6>Hello World</h6>
                  </div>
                </div>
                <div class="input-group ">
                  <textarea
                    // value={message}
                    className="my-text-input"
                    // onChange={(e) => setMessage(e.target.value)}
                  />

                  <button
                    className="btn btn-primary "
                    // onClick={() => sendMessage()}
                  >
                    Send
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "500px" }}
              >
                <h4 className="">
                  Hello Welcome <span className="text-primary"> </span>{" "}
                  <br></br>
                  Start Chat With Your Friends
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
