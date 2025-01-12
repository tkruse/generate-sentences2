import { Noun } from "../Noun";

export const materialNounsGenerator = [
  () => new Noun("das Haus,die Häuser,des Hauses"),
  () => new Noun("das Bett,-en,-es"),
  () => new Noun("das Buch,die Bücher,des Buches"),
  () => new Noun("das Messer,-,-s"),
  () => new Noun("das Hemd,-en,-es"),
  () => new Noun("das Bier,-e,-es"),
  () => new Noun("der Zug,die Züge,des Zuges"),
  () => new Noun("der Bus,die Busse,des Busses"),
  () => new Noun("der Koffer,-,-s"),
  () => new Noun("der Apfel,die Äpfel,des Apfels"),
  () => new Noun("der Schuh,-e,-es"),
  () => new Noun("der Wein,-e,-es"),
  () => new Noun("die Lampe,-n,-n"),
  () => new Noun("die Tasse,-n,-"),
  () => new Noun("die Gabel,-n,-"),
  () => new Noun("die Socke,-n,-"),
  () => new Noun("die Soße,-n,-"),
];
