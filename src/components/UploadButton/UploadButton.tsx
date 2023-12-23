import { ChangeEvent } from "react";
import cn from "classnames";

import "./UploadButton.scss";

interface UploadButtonProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  imageName?: File | null;
  error?: string | false | undefined;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  setFieldValue,
  imageName,
  error,
}) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file =
      event.currentTarget.files && event.currentTarget.files.length > 0
        ? event.currentTarget.files[0]
        : null;

    setFieldValue("photo", file, true);
  };

  return (
    <>
      <div className="upload-container">
        <div className="upload-container__fields">
          <label
            htmlFor="uploadImage"
            className={cn("upload-container__label", {
              "upload-error": error,
            })}
          >
            Upload
          </label>
          <input
            type="file"
            className={"upload-container__input"}
            id="uploadImage"
            onChange={handleFileChange}
            accept="image/jpeg, image/jpg"
          />
          <span
            className={cn("upload-container__text", {
              "upload-error": error,
              "upload-text-filled": imageName?.name,
            })}
          >
            {imageName?.name || "Upload your photo"}
          </span>
        </div>
        <div className="upload-container__error">{error}</div>
      </div>
    </>
  );
};
