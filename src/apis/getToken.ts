export const getToken = () => {
    if(process.env.NODE_ENV === "production") {
        return "PRODUCTION_TOKEN";
    }
    return "DEV_TOKEN";
}