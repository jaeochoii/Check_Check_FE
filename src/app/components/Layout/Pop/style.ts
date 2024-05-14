import styled from "@emotion/styled";

export const PopDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 344px;
  height: 48px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  background: var(--Red-90, #fed5d5);
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  opacity: 0; /* 초기에는 보이지 않도록 설정 */
  animation: fadeInOut 0.5s ease-in-out forwards; /* fade in/out 애니메이션 적용 */

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PopText = styled.div`
  height: 20px;

  color: var(--M3-sys-dark-inverse-on-surface, #322f35);
  font-feature-settings: "ss10" on;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.091px;
  margin-left: 16px;
`;

export const Exit = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 100px;
`;
