export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10,13}$/; // Valid for 10,13 digit numbers
    return phoneRegex.test(phone);
};