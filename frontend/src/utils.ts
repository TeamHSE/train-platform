export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const matchPasswords = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};