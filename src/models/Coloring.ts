import { Gender } from "./Gender";

// colors: blue man, green neutral, red woman, black plural
export function renderColorizedByGender(
  gender: Gender,
  rendered: string,
): string {
  let colorClass = "";

  switch (gender) {
    case "männlich":
      colorClass = "has-text-link";
      break;
    case "weiblich":
      colorClass = "has-text-danger";
      break;
    case "neutral":
      colorClass = "has-text-success";
      break;
    default:
      colorClass = "has-text-dark";
  }

  return `<span class="${colorClass}">${rendered}</span>`;
}
