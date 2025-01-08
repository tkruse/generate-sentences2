import { Gender } from "./Gender";

// colors: blue man, green neutral, red woman, black plural
export function renderColorizedByGender(
  gender: Gender,
  rendered: string,
): string {
  let color = "";

  switch (gender) {
    case "männlich":
      color = "blue";
      break;
    case "weiblich":
      color = "red";
      break;
    case "neutral":
      color = "green";
      break;
    default:
      color = "black";
  }

  return `<span style="color:${color}">${rendered}</span>`;
}
