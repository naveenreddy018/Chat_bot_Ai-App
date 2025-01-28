import React, { useState } from "react";

export const photo = [];

function Settings() {
  const [activeTab, setActiveTab] = useState("profile"); // Active tab state
  const [username, setUsername] = useState("Naveen Reddy");
  const [email, setEmail] = useState("naveen@example.com");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  // Add the profile picture to the photo array
  if (profilePicture && !photo.includes(profilePicture)) {
    photo.push(profilePicture);
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Profile Settings</h3>
            <div style={styles.field}>
              <label style={styles.label}>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Profile Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                style={styles.input}
              />
              {profilePicture && (
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  style={styles.profilePicture}
                />
              )}
            </div>
          </div>
        );
      case "security":
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Security Settings</h3>
            <div style={styles.field}>
              <label style={styles.label}>Change Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                style={styles.input}
              />
            </div>
          </div>
        );
      case "notifications":
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Notification Settings</h3>
            <div style={styles.field}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
                Email Notifications
              </label>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={() => setSmsNotifications(!smsNotifications)}
                />
                SMS Notifications
              </label>
            </div>
          </div>
        );
      case "theme":
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Theme Settings</h3>
            <div style={styles.field}>
              <label style={styles.label}>Theme:</label>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{
                  ...styles.toggleButton,
                  backgroundColor: isDarkMode ? "#007bff" : "#f0f0f0",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? "#000000" : "#ffffff", 
        color: isDarkMode ? "#ffffff" : "#000000", 
      }}
    >
      <div
        style={{
          ...styles.sidebar,
          backgroundColor: isDarkMode ? "#1f1f1f" : "#f5f5f5", 
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <h2 style={styles.sidebarTitle}>Settings</h2>
        <ul style={styles.navList}>
          <li
            style={
              activeTab === "profile"
                ? { ...styles.activeNavItem, backgroundColor: isDarkMode ? "#007bff" : "black" }
                : styles.navItem
            }
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </li>
          <li
            style={
              activeTab === "security"
                ? { ...styles.activeNavItem, backgroundColor: isDarkMode ? "#007bff" : "black" }
                : styles.navItem
            }
            onClick={() => setActiveTab("security")}
          >
            Security
          </li>
          <li
            style={
              activeTab === "notifications"
                ? { ...styles.activeNavItem, backgroundColor: isDarkMode ? "#007bff" : "black" }
                : styles.navItem
            }
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </li>
          <li
            style={
              activeTab === "theme"
                ? { ...styles.activeNavItem, backgroundColor: isDarkMode ? "#007bff" : "black" }
                : styles.navItem
            }
            onClick={() => setActiveTab("theme")}
          >
            Theme
          </li>
        </ul>
      </div>
      <div style={styles.content}>{renderTabContent()}</div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100%",
    fontFamily: "Times", 
  },
  sidebar: {
    width: "250px",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  sidebarTitle: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
   navItem: {
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "10px",
    transition: "background-color 0.9s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
    border: "1px solid #e0e0e0",
  },
  activeNavItem: {
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "10px",
    color: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", 
    backgroundColor: "#007bff",
    border: "1px solid #0056b3",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  tabContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  profilePicture: {
    marginTop: "10px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  toggleButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    border: "none",
  },
};

export default Settings;
