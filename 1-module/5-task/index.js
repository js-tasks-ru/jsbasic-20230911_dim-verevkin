function truncate(str, maxlength) {
  const addStr = "…";
  return str.length <= maxlength ? str : str.slice(0, maxlength - addStr.length) + addStr;
}