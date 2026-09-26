
// Địa chỉ URL backend ASP.NET Core của Phúc (thường là port 5000, 5001 hoặc 52xx)
const API_BASE_URL = "http://localhost:5000/api";

// Hàm chung để gọi API
async function request(endpoint, options = {}) {
  try {
    const response = await `${API_BASE_URL}${endpoint}`;
    // Nếu dùng fetch chuẩn:
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
    if (!res.ok) throw new Error("Lỗi gọi API: " + res.statusText);
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}

// Các hàm gọi API cụ thể cho từng module
export const api = {
  getOrders: () => request("/orders"),
  createOrder: (data) => request("/orders", { method: "POST", body: JSON.stringify(data) }),
  
  getStations: () => request("/landingstations"),
  getDrones: () => request("/drones"),
  
  login: (credentials) => request("/auth/login", { method: "POST", body: JSON.stringify(credentials) }),
};

