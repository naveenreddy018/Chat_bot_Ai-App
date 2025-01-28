import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import ImageComponent from '../ImageComponent/image';
import "./response.css";

import TypingEffect from './typingeffect';
import { recent_context } from '../context/cont';
import FormModal from './modal';
import { Link } from 'react-router-dom';
import { Username } from '../interface/Login';
import { photo } from '../interface/setting';

export const Array = [];

function Response_Bar() {
    const [Display, setDisplay] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [sendRequest, setSendRequest] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(null);
    const { setRecent_items } = useContext(recent_context);
    const [toggle, setToggle] = useState(false);
    const [userModalBody, setUserModalBody] = useState(false);
    const [clicked, setClicked] = useState(false);

    const storedUsername = localStorage.getItem('Username');
    const storedPhoto = localStorage.getItem('profilePhoto');
    const [username, setUsername] = useState(storedUsername || 'Guest');
    const [profilePhoto, setProfilePhoto] = useState(
        storedPhoto || (photo && photo.length > 0 ? photo[photo.length - 1] : assets.user_icon)
    );

    const handlePhotoChange = (newPhoto) => {
        const photoToSet = newPhoto || assets.user_icon;
        setProfilePhoto(photoToSet);
        localStorage.setItem('profilePhoto', photoToSet);
    };

    const handleLogout = () => {
        localStorage.removeItem('Username');
        localStorage.removeItem('profilePhoto');
        setUsername('Guest');
        setProfilePhoto(assets.user_icon);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://render-back-end-4.onrender.com/prompt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt: sendRequest }),
                });

                const responseData = await res.json();
                setResponse(responseData.response);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                console.error({ error: "An error occurred" });
            }
        };

        if (sendRequest) {
            fetchData();
        }
    }, [sendRequest]);

    useEffect(() => {
        if (clicked) {
            Array.push(prompt);
        }
    }, [sendRequest]);

    const handleToggle = () => {
        setToggle((prev) => !prev);
        document.body.style.backgroundColor = toggle ? "white" : "black";
        document.body.style.color = toggle ? "black" : "white";
    };

    const handleCardClick = (cardText) => {
        setPrompt(cardText);
        setSendRequest(cardText);
        setLoading(true);
        setDisplay(true);
        setRecent_items(cardText);
        setClicked(true);
        setRecent_items(cardText);
    };

    return (
        <div className="response-container">
            <div className="header">
                <div className="logo">
                    <ImageComponent
                        src={assets.Gemini_Advanced_logo}
                        style={{ width: 150 }}
                    />
                </div>
                <div className="nav">
                    <div className="nav-name">
                        <a href="https://one.google.com/explore-plan/gemini-advanced">
                            Try advanced Gemini
                        </a>
                    </div>
                    <div className="toggle_bar">
                        <button>
                            <Link to="/auth" >Return to home</Link>
                        </button>
                    </div>
                    <div className="nav-hamburger">
                        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard">
                            <ImageComponent
                                src="https://e7.pngegg.com/pngimages/530/733/png-clipart-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-thumbnail.png"
                                style={{ width: 35, borderRadius: "0%" }}
                            />
                        </a>
                    </div>
                    <div className="nav-user-icon">
                        <ImageComponent
                              src={photo && photo.length > 0 ? photo[photo.length - 1] : assets.user_icon} 
                            style={{ width: 40, borderRadius: "50%" }}
                            onClick={() => {
                                setUserModalBody((prev) => !prev);
                                handlePhotoChange();
                            }}
                        />
                    </div>
                    {userModalBody && <FormModal className="pos" name={username} />}
                </div>
            </div>
            {Display ? (
                <div className="dialog-box">
                    <div>
                        {loading ? (
                            <div className="loader">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        ) : (
                            <TypingEffect text={response} queryt={prompt} delay={30} />
                        )}
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
                        <div
                            className="card"
                            onClick={() =>
                                handleCardClick(
                                    "Suggest beautiful places to see on an upcoming road trip"
                                )
                            }
                        >
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <ImageComponent className="card_image" src={assets.compass_icon} />
                        </div>
                        <div
                            className="card"
                            onClick={() =>
                                handleCardClick("Briefly summarize this concept")
                            }
                        >
                            <p>Briefly summarize this concept</p>
                            <ImageComponent className="card_image" src={assets.bulb_icon} />
                        </div>
                        <div
                            className="card"
                            onClick={() => handleCardClick("Five habits to follow daily")}
                        >
                            <p>Five habits to follow daily</p>
                            <ImageComponent className="card_image" src={assets.message_icon} />
                        </div>
                        <div
                            className="card"
                            onClick={() => handleCardClick("Improve the readability of the code")}
                        >
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
                        style={{
                            backgroundColor: toggle ? "black" : "white",
                            color: toggle ? "white" : "black",
                        }}
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                        placeholder="Enter your prompt"
                    />
                </div>
                <div className="additonal-icons">
                    <div className="mic-icon">
                        <ImageComponent src={assets.mic_icon} style={{ width: 30 }} />
                    </div>
                    <div>
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: "none" }}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <label
                            htmlFor="file-input"
                            style={{
                                display: "inline-block",
                                width: 30,
                                height: 30,
                                backgroundImage: `url(${assets.gallery_icon})`,
                                backgroundSize: "cover",
                                cursor: "pointer",
                            }}
                        ></label>
                    </div>
                    <div className="send-icon">
                        <ImageComponent
                            src={assets.send_icon}
                            style={{ width: 30 }}
                            onClick={() => {
                                if (prompt.trim()) {
                                    if (!Display) setDisplay(true);
                                    setSendRequest(prompt);
                                    setLoading(true);
                                    setRecent_items(prompt);
                                    setClicked(true);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Response_Bar;
