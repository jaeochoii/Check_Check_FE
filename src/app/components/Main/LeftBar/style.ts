import { Colors, fontGenerator } from "@/styles";
import styled from "@emotion/styled";

export const LeftBar = styled.div`
  display: flex;
  width: 25%;
  height: 100vh;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--Light-Blue-99, #f7fdff);
`;
