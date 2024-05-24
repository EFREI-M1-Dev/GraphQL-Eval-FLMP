import ChatBubble from './icons/ChatBubble'
import Clap from './icons/Clap'
import Notification from './icons/Notification'
import Save from './icons/Save'
import Search from './icons/Search'
import Write from './icons/Write'
import { SVGProps } from '../../../types/SVGProps'

type IconMap = {
  [key: string]: React.ComponentType<SVGProps>
}

const icons: IconMap = {
  clap: Clap,
  chat_bubble: ChatBubble,
  save: Save,
  notification: Notification,
  search: Search,
  write: Write,
}

export default icons
