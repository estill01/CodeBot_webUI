import { useAtom } from 'jotai';
import { Page } from './Page';
import { PAGE } from '../../../utils';
import { 
  promptAtom, 
  isVisibleCodeBotCardAtom,
  isVisibleOpenAICardAtom,
  isVisibleMetaMaskCardAtom,
  hasKeyOpenAIAtom,
} from '../../../atoms';
import GeneratorBar from '../../core/GeneratorBar';
import { 
  OpenAICard, 
  MetaMaskCard,
  CodeBotCard,
  OutputCard,
} from '../../cards';

// TODO Refactor - Iterate stored prompts/responses
export const ProjectsPage = ({className}) => {
  const [ prompt ] = useAtom(promptAtom);
  const [ isVisibleCodeBotCard ] = useAtom(isVisibleCodeBotCardAtom);
  const [ isVisibleOpenAICard ] = useAtom(isVisibleOpenAICardAtom);
  const [ isVisibleMetaMaskCard ] = useAtom(isVisibleMetaMaskCardAtom);
  const [ hasKeyOpenAI ] = useAtom(hasKeyOpenAIAtom);

  return (
    <Page className='p-6' page={PAGE.projects}>
      <GeneratorBar className='mb-4'/>

      { prompt &&
        <OutputCard/>
      }

      { isVisibleCodeBotCard &&
        <CodeBotCard className='mt-4'/>
      }

      { isVisibleOpenAICard && !hasKeyOpenAI &&
        <OpenAICard className='mt-4'/>
      }

      { isVisibleMetaMaskCard &&
        <MetaMaskCard className='mt-4'/>
      }

    </Page>
  )
}
