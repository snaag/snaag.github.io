export const getToken = () => {
    if(process.env.NODE_ENV === "production") {
        return "";
    }
    return process.env.REACT_APP_TOKEN;
}