import * as React from "react";
import { useState, useRef, ChangeEvent } from "react";
import { ProfileImg, FileInput, ProfileImgWrapper } from "./style";

export const SetProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string;
      setProfileImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <ProfileImgWrapper onClick={handleProfileImageClick}>
        {/* 프로필 이미지 */}
        {profileImage ? (
          <ProfileImg src={profileImage} alt="Profile" />
        ) : (
          <ProfileImg
            src="data:image/jpeg;base64,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"
            alt="Default"
          />
        )}
        {/* 파일 입력 필드 */}
        <FileInput
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          ref={fileInputRef}
        />
      </ProfileImgWrapper>
    </div>
  );
};
