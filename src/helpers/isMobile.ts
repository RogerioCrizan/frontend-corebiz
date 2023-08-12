const IsMobile = () => {
  return typeof window !== "undefined" && window.outerWidth < 959;
};

export default IsMobile;
