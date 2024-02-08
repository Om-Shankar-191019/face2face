export const defaultAvatar =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106";

export function generateRandomUsername() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let username = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters.charAt(randomIndex);
  }
  return username;
}
