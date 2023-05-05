import axios from "axios";

export interface TranslationPayload {
  src: string | undefined;
  target: string;
}

export const translateWithGoogleCloudAPI = async (
  payload: TranslationPayload
) => {
  const res = await axios.post(
    `${process.env.URL_BACKEND_SERVICE_TRANSLATION}/translation`,
    payload
  );
  if (res.status === 200) {
    return String(res.data.translated);
  }
  return String(payload.src);
};
