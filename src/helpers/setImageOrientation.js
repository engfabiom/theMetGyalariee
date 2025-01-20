import { getImageSize } from "react-image-size";

export const setImageOrientation = async (object) => {
  try {
    const { width, height } = await getImageSize(object.primaryImageSmall);
    object.orientation = width > height ? "landscape" :  width < height ? "portrait" : "square";
  }
  catch (error) {
    console.error(`Error getting image size:`, error);
    console.error(`setting [${object.primaryImageSmall}] to portrait orientation`);
    object.orientation = "portrait";
    return null;
  }
  return object;
};
