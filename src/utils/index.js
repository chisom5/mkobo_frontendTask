export const getPathName = (path) => {
  switch (path) {
    case "/":
      return "Dashboard";

    case "/mkolo":
      return "Mkolo";

    case "/early_pay":
      return "Early pay";

    default:
      return;
  }
};
