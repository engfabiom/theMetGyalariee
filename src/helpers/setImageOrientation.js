import { getImageSize } from "react-image-size";

export const setImageOrientation = async (object) => {
  try {
    const { width, height } = await getImageSize(object.primaryImageSmall);
    object.orientation = width >= height ? "landscape" : "portrait";
  }
  catch (error) {
    console.error(`Error getting image size:`, error);
    console.error(`setting [${object.primaryImageSmall}] to landscape orientation`);
    object.orientation = "landscape";
    return null;
  }
  return object;
};
