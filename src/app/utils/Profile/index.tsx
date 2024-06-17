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
          <ProfileImg src="/image/img-profile.jpg" alt="Default" />
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
