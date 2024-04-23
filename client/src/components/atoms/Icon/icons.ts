import ChatBubble from './icons/ChatBubble'
import Clap from './icons/Clap'
import Save from './icons/Save'

type IconMap = {
  [key: string]: React.ComponentType<any>
}

const icons: IconMap = {
  clap: Clap,
  chat_bubble: ChatBubble,
  save: Save,
}

export default icons
