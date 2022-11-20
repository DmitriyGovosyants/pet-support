import { useState } from 'react';

export const PreviewImage = ({ image }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div style={{ marginBottom: '28px' }}>
      <img src={preview} alt="preview" width="200px" height="200px" />
    </div>
  );
};
