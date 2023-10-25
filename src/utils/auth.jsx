import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
  // neu duration nho hon 0 , tuc la token da qua han
  // neu duration lon hon 0 , tuc la token con han
}

// lay token tu localstorage
export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}
// lay token
export function getTokenLoader() {
  const token = getAuthToken();
  return token;
}
// kiem tra xem co token hay k
export function checkAuthToken() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
