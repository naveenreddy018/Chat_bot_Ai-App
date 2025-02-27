import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import ImageComponent from "../ImageComponent/image";
import "./response.css";
import TypingEffect from "./typingeffect";
import { recent_context } from "../context/cont";
import FormModal from "./modal";
import { Link } from "react-router-dom";
import { useRef } from "react";


export const Array = [];

console.log(Array)

function Response_Bar() {
  const [Display, setDisplay] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(null);
  const { setRecent_items } = useContext(recent_context);
  const [toggle, setToggle] = useState(false);
  const [userModalBody, setUserModalBody] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [requestInProgress, setRequestInProgress] = useState(false);
  const conversationEndRef = useRef(null);

  const storedUsername = localStorage.getItem("Username");
  const storedPhoto = localStorage.getItem("profilePhoto");
  const [username, setUsername] = useState(storedUsername || "Guest");
  const [profilePhoto, setProfilePhoto] = useState(
    storedPhoto || assets.user_icon
  );

  const handlePhotoChange = (newPhoto) => {
    const photoToSet = newPhoto || assets.user_icon;
    setProfilePhoto(photoToSet);
    localStorage.setItem("profilePhoto", photoToSet);
  };
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleLogout = () => {
    localStorage.removeItem("Username");
    localStorage.removeItem("profilePhoto");
    setUsername("Guest");
    setProfilePhoto(assets.user_icon);
  };

  const [showRetry, setShowRetry] = useState(false);

  const handleSend = async (currentPrompt) => {
    if (currentPrompt.trim() && !requestInProgress) {
      setPrompt("");
      setLoading(true);
      setDisplay(true);
      setRecent_items(currentPrompt);
      setRequestInProgress(true);
      setShowRetry(false); // Hide retry button initially
  
      setConversation((prev) => [...prev, { prompt: currentPrompt, response: "" }]);
  
      let retryCount = 0;
      const maxRetries = 10;
  
      const fetchResponse = async () => {
        Array.push(currentPrompt)
        try {
          const res = await fetch("https://render-back-end-8.onrender.com/prompt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: currentPrompt }),
          });
  
          if (!res.ok) {
            throw new Error("Failed to fetch AI response");
          }
  
          const responseData = await res.json();
          setLoading(false);
          setConversation((prev) =>
            prev.map((entry) =>
              entry.prompt === currentPrompt ? { ...entry, response: responseData.response } : entry
            )

          );
          
        } catch (error) {
          console.error("Error:", error.message);
          if (retryCount < maxRetries) {
            retryCount++;
            console.log(`Retrying... Attempt ${retryCount}`);
            setTimeout(fetchResponse, 2000);
          } else {
            setLoading(false);
            setShowRetry(true); 
            setConversation((prev) => [
              ...prev,
              { prompt: currentPrompt, response: "Sorry, there was an error. Please try again later." }
            ]);
          }
        } finally {
          setRequestInProgress(false);
        }
      };
  
      fetchResponse();
    }
  };
  
  const handleRetry = () => {
    setShowRetry(false);
    handleSend(prompt); 
  };
  

  const handleCardClick = (cardText) => {
    if (!requestInProgress) {
      setPrompt(cardText);
      handleSend(cardText);
    }
  };

  return (
    <div className="response-container">
      <div className="header">
        <div className="logo">
          <ImageComponent src={assets.Gemini_Advanced_logo} style={{ width: 150 }} />
        </div>
        <div className="nav">
          <div className="nav-name">
            <a href="https://one.google.com/explore-plan/gemini-advanced">
              Try advanced Gemini
            </a>
          </div>
          <div className="toggle_bar">
            <button>
              <Link to="/auth">Return to home</Link>
            </button>
          </div>
          <div className="nav-user-icon">
            <ImageComponent
              src={profilePhoto}
              style={{ width: 40, borderRadius: "50%",cursor :"pointer" }}
              onClick={() => setUserModalBody((prev) => !prev)}
            />
          </div>
          {userModalBody && <FormModal className="pos" name={username} />}
        </div>
      </div>

      {Display ? (
        <div className="dialog-box">
          <div className="conversation-history">
            {conversation.map((entry, index) => (
              <div key={index} className="message">
                <div className="prompt-display">
                  <p className="hello" style={{ fontSize: "1.2rem" }}>
                    <strong className="you">You :</strong> {entry.prompt}
                  </p>
                </div>
                {entry.response ? (
                  <div  ref={conversationEndRef} className="response-display">
                    <TypingEffect add={conversation} text={entry.response} delay={30} />
                  </div>
                ) : (
                  loading && (
                    <div className="loader">
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="main">
          <div className="greet">
            <p>
              <span>Hello {username}</span>
            </p>
            <p>How can I help you?</p>
          </div>
          <div className="cards">
            <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <ImageComponent className="card_image" src={assets.compass_icon} />
            </div>
            <div className="card" onClick={() => handleCardClick("Briefly summarize this concept")}>
              <p>Briefly summarize this concept</p>
              <ImageComponent className="card_image" src={assets.bulb_icon} />
            </div>
            <div className="card" onClick={() => handleCardClick("Five habits to follow daily")}>
              <p>Five habits to follow daily</p>
              <ImageComponent className="card_image" src={assets.message_icon} />
            </div>
            <div className="card" onClick={() => handleCardClick("Improve the readability of the code")}>
              <p>Improve the readability of the code</p>
              <ImageComponent className="card_image" src={assets.code_icon} />
            </div>
          </div>
        </div>
      )}

      <div className="footer">
        <div className="input-bar">
        <input
  type="text"
  style={{ backgroundColor: toggle ? "black" : "white", color: toggle ? "white" : "black" }}
  onChange={(e) => setPrompt(e.target.value)}
  value={prompt}
  placeholder="Enter your prompt"
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleSend(prompt);
    } else if (e.key === "Escape") {
      setPrompt(""); 
    }
  }}
/>

        </div>
        <div className="additonal-icons">
        <div className="send-icon">
  {requestInProgress ? (
    <div className="spinner"></div> 
  ) : (
    <ImageComponent
      src={assets.send_icon}
      style={{ width: 30, cursor: "pointer" }}
      onClick={() => handleSend(prompt)}
    />
  )}
</div>

        </div>
      </div>
    </div>
  );
}

export default Response_Bar;
