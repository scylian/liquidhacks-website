import { useViewportScroll, useTransform, motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';

const AnimatedBar = ({ keyFrames, values, width, style }) => {
  const theme = useTheme();
  
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, keyFrames, values)
  return (
    <motion.div
      style={{
        ...style,
        backgroundColor: theme.palette.info.main,
        width: theme.spacing(width),
        height: scaleAnim,
      }}
    >
    </motion.div>
  )
}

export default AnimatedBar;