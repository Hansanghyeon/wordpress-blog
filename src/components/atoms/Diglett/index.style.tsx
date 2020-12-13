import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DiglettRoot = styled.div`
  background-color: ${({ theme }) => theme.colors.bg[1]};
  overflow: hidden;
  position: relative;
`;
export const MoveWrap = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
