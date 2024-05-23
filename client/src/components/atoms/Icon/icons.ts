import ChatBubble from './icons/ChatBubble'
import Clap from './icons/Clap'
import Notification from './icons/Notification'
import Save from './icons/Save'
import Search from './icons/Clap copy'
import Write from './icons/Write'

type IconMap = {
  [key: string]: React.ComponentType<any>
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
