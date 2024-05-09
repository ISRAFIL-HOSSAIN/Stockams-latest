import adminAPI from "@/api/adminAPI";
import { useMutation } from "@tanstack/react-query";

const usePatchUpdate = ({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
} = {}) => {
  const mutation = useMutation(
    (data) =>
      adminAPI.patch(endpoint, data, {
        headers: {
          "Content-Type": isMultiPart
            ? "multipart/form-data"
            : "application/json",
        },
      }),
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return mutation;
};

export default usePatchUpdate;
