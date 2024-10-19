const setCurrentTimezone = () => {
  localStorage.setItem("timezone", -new Date().getTimezoneOffset() / 60);
};

const validateTimezone = () => {
  const result = localStorage.getItem("timezone");

  if (!result) return false;
  if (Math.abs(result) > 14) return false;

  return true;
};

export const getTimezone = () => {
  if (!validateTimezone()) {
    setCurrentTimezone();
  }

  return Number(localStorage.getItem("timezone"));
};

export const setTimezone = (value) => {
  localStorage.setItem("timezone", value);
};

export const initTimezone = (element) => {
  element.addEventListener("DOMContentLoaded", getTimezone);
};
