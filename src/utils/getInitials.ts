export const getInitials = (name: string) => {
  const names = name.split(" ");
  return names.map((n) => n.charAt(0)).join(""); // "John Doe" -> "JD"
};
