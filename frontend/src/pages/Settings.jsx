import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const formatDateToIndonesia = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Validasi jika string tanggal rusak/tidak valid
  if (isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Apakah kamu yakin ingin keluar?");
    if (!confirmLogout) return;

    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      navigate("/login");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    email: "",
    password: "",
  });

  // State untuk toggle switches notifikasi
  const [emailNotif, setEmailNotif] = useState(true);
  const [examReminder, setExamReminder] = useState(true);
  const [courseUpdate, setCourseUpdate] = useState(true);

  // State untuk status loading & pesan info
  const [isLoading, setIsLoading] = useState(false);

  // 1. FUNGSI GET: AMBIL DATA DARI BACKEND
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan di localStorage");

        const response = await fetch("http://localhost:3000/api/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name || "",
            birthDate: data.birthDate
              ? formatDateToIndonesia(data.birthDate)
              : "",
            email: data.email || "",
          });
          setEmailNotif(data.emailNotif ?? true);
          setExamReminder(data.examReminder ?? true);
          setCourseUpdate(data.courseUpdate ?? true);
        } else {
          throw new Error("Backend belum siap");
        }
      } catch (error) {
        console.log(
          "⚠️ Backend belum merespons, mengaktifkan data dummy AMATI...",
        );
        // CADANGAN: Data dummy otomatis aktif jika backend belum dibuat
        setFormData({
          name: "Anna Carescco",
          birthDate: "1999-08-21",
          email: "annacarescco@gmail.com",
        });
      }
    };

    fetchUserData();
  }, []);

  // Handler mendeteksi perubahan ketikan di keyboard siswa
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FUNGSI PUT: SIMPAN PERUBAHAN PROFIL
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("🎉 Profil berhasil diperbarui di database database!");
      } else {
        throw new Error("Gagal update ke database");
      }
    } catch (error) {
      console.error(error);
      // Notifikasi fallback simulasi sukses lokal
      alert(
        `⚙️ [Mode Simulasi] Perubahan profil untuk "${formData.name}" disimpan lokal.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 3. FUNGSI PATCH: SIMPAN PREFERENSI TOGGLE NOTIFIKASI
  const handleToggleNotif = async (type, currentValue, setStates) => {
    const newValue = !currentValue;
    setStates(newValue); // Update UI secara instan

    try {
      await fetch("http://localhost:3000/api/user/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [type]: newValue }),
      });
    } catch (error) {
      console.log(
        `⚙️ Preferensi "${type}" disinkronkan ke local state: ${newValue}`,
      );
    }
  };

  // FUNGSI UNTUK MERESPONS PERGESERAN LAYAR (SMOOTH SCROLL)
  const scrollToSection = (targetRef) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get("view");

    const timer = setTimeout(() => {
      if (view === "settings") {
        scrollToSection(notificationsRef);
      } else if (view === "profile") {
        scrollToSection(profileRef);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SIDEBAR TUNGGAL */}
      <Sidebar activeMenu="Settings" />

      {/* WADAH UTAMA KANAN */}
      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* AREA KONTEN SCROLLABLE SINGLE-CONTAINER */}
        <div
          style={{
            flex: "1",
            padding: "40px 40px 60px 40px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            scrollBehavior: "smooth",
          }}
        >
          {/* CONTAINER 1: BLOK PROFIL */}
          <div
            ref={profileRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "10px",
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  color: "#002d72",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                }}
              >
                Profil
              </h1>
              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#666",
                  fontSize: "0.95rem",
                }}
              >
                Manage your account and preferences
              </p>
            </div>

            <form
              onSubmit={handleSaveChanges}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 25px 0",
                  fontSize: "1.2rem",
                  color: "#002d72",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                👤 Profile Information
              </h3>

              {/* Bagian Edit Foto */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div>
                  <img
                    src="/profile.png"
                    alt="Avatar"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    style={{
                      padding: "8px 15px",
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Edit Photo
                  </button>
                  <span style={{ fontSize: "0.75rem", color: "#aaa" }}>
                    We suggest you to upload your photo with ratio 1:1. Please
                    make sure the size is under 1 MB.
                  </span>
                </div>
              </div>

              {/* Form Input Baris dengan Value Dinamis */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "35px",
                  rowGap: "35px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      outline: "none",
                      color: "#555",
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Birth Date
                  </label>
                  <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      outline: "none",
                      color: "#555",
                    }}
                  />
                </div>
                <div style={{ gridColumn: "span 2"}}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      outline: "none",
                      color: "#555",
                    }}
                    required
                  />
                </div>
              </div>

              {/* GRUP TOMBOL DENGAN LOGOUT INDEPENDEN */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "35px",
                  alignItems: "center",
                }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    color: "#666",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#fff",
                    border: "1px solid #ff3366",
                    color: "#ff3366",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginLeft: "auto",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff3366";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#ff3366";
                  }}
                >
                  Logout
                </button>
              </div>
            </form>
          </div>

          {/* CONTAINER 2: BLOK SETTINGS NOTIFIKASI */}
          <div
            ref={notificationsRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: "40px",
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  color: "#002d72",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                }}
              >
                Settings
              </h1>
              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#666",
                  fontSize: "0.95rem",
                }}
              >
                Manage your account and preferences
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 30px 0",
                  fontSize: "1.2rem",
                  color: "#002d72",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#002d72"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Notifications
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                {/* Toggle 1 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #f5f5f5",
                    paddingBottom: "20px",
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
                      Email Notifications
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "0.85rem",
                        color: "#aaa",
                      }}
                    >
                      Receive email updates about your courses
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleToggleNotif("emailNotif", emailNotif, setEmailNotif)
                    }
                    style={{
                      width: "50px",
                      height: "26px",
                      backgroundColor: emailNotif ? "#007bff" : "#ccc",
                      borderRadius: "20px",
                      padding: "3px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: emailNotif ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Toggle 2 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #f5f5f5",
                    paddingBottom: "20px",
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
                      Examination Reminders
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "0.85rem",
                        color: "#aaa",
                      }}
                    >
                      Get reminded about upcoming exam
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleToggleNotif(
                        "examReminder",
                        examReminder,
                        setExamReminder,
                      )
                    }
                    style={{
                      width: "50px",
                      height: "26px",
                      backgroundColor: examReminder ? "#007bff" : "#ccc",
                      borderRadius: "20px",
                      padding: "3px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: examReminder ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Toggle 3 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
                      Courses Updates
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "0.85rem",
                        color: "#aaa",
                      }}
                    >
                      Notifications about courses changes
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleToggleNotif(
                        "courseUpdate",
                        courseUpdate,
                        setCourseUpdate,
                      )
                    }
                    style={{
                      width: "50px",
                      height: "26px",
                      backgroundColor: courseUpdate ? "#007bff" : "#ccc",
                      borderRadius: "20px",
                      padding: "3px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: courseUpdate ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
