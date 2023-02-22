import { PAGE } from '../../utils';
import { 
  FaceIcon, 
  GearIcon,
  GlobeIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import CodeGlyph from './CodeGlyph';

export const Icon = ({name, color, className='w-5 h-5'}) => {
    switch(name) {
      case PAGE.account:
        return <FaceIcon color={color} className={className}/>
      case PAGE.configs:
        return <GearIcon color={color} className={className}/>
      case PAGE.dashboard:
        return <RocketIcon color={color} className={className}/>
      case PAGE.marketplace:
        return <GlobeIcon color={color} className={className}/>
      case PAGE.projects:
        return <CodeGlyph/>
      default:
        return <CodeGlyph/>
    }
}
