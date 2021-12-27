export const generateToken = () => {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}

export const getCookie = (name) => {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}
export const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
