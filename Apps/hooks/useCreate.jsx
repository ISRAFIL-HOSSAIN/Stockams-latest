
import { useMutation } from "@tanstack/react-query";
import adminAPI from "../../api/adminAPI";

const useCreate = ({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
} = {}) => {
  const mutation = useMutation(
    (data) => {
      const contentType = isMultiPart ? "multipart/form-data" : "application/json";

      return adminAPI.post(endpoint, data, {
        headers: {
          "Content-Type": contentType,
        },
      });
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return mutation;
};

export default useCreate;
