import { Field, useFormikContext } from "formik";
import React, { useState } from "react";

interface ProfilePictureFieldProps {
  id: string;
  name: string;
}

const ProfilePictureField = ({ id, name }: ProfilePictureFieldProps) => {
  const formik = useFormikContext<{ [key: string]: string }>();
  const [imageField, setImageField] = useState<boolean>(false);
  const toggleImageField = () => setImageField(!imageField);

  return (
    <div>
      <div className="profile-picture-input">
        <div>
          <div
            onClick={toggleImageField}
            className="field profile-picture-container"
          >
            <div className="input-image">
              <img
                className="profile-picture"
                src={formik.values[name] || "/images/pfph.jpg"}
                alt="pfph"
              />
            </div>
          </div>
        </div>
        {imageField ? (
          <div className="profile-image-input-container">
            <Field
              onBlur={toggleImageField}
              type="text"
              id={id}
              name={name}
              className="profile-image-input"
              value={formik.values[name] as string}
              placeholder="Enter Image URL"
            />
          </div>
        ) : (
          <div className="pf-button-container">
            <div onClick={toggleImageField} className="pf-button">Одбери слика</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureField;
