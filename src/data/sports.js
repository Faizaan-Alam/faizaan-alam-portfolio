/**
 * Sports.
 *
 * Confirmed by Faizaan (site medals):
 *   Gold 100m, Silver 100m, Bronze 300m
 *
 * Also on the resume:
 *   College Athletics Team Captain; 100m & 200m sprinter
 *
 * See src/data/needsConfirmation.js for medal details that differ
 * between the resume and the brief (mixed relay gold, 200m bronze).
 */
export const sports = {
  title: "On the track",
  sport: "100m sprint",
  intro:
    "I sprint the 100 metres for the college athletics team. The work is simple: start, drive, hold form. I like that it does not negotiate.",
  role: "College Athletics Team Captain",
  events: ["100m", "200m"],
  image: "/images/sports/sprint.svg",
  medals: [
    { place: "Gold", event: "100m sprint", source: "confirmed" },
    { place: "Silver", event: "100m sprint", source: "confirmed" },
    { place: "Bronze", event: "300m", source: "confirmed" },
  ],
}
