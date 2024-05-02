import styled from "styled-components";

export const ProfileImg = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 10000px;
  border: 1px solid var(--Line-Normal-Alternative, rgba(112, 115, 124, 0.08));
  object-fit: cover;
`;

export const ProfileImgWrapper = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;
