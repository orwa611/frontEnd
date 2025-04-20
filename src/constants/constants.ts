export const baseUrl = "http://localhost:8000/";

export const getImageUrl = (image?: string) => {
    if (image != null && image != "" ) {    
        return baseUrl + "image/" + image;
      } else {
        return baseUrl + "image/default.png";
      }
}