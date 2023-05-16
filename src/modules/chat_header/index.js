import {ChatFlags, PlatformTypes, SettingIds} from '../../constants.js';
import settings from '../../settings.js';
import {hasFlag} from '../../utils/flags.js';
import {loadModuleForPlatforms} from '../../utils/modules.js';

class ChatHeaderModule {
  constructor() {
    settings.on(`changed.${SettingIds.CHAT}`, this.toggleChatHeader);
    this.toggleChatHeader();
  }

  toggleChatHeader() {
    document.body.classList.toggle(
      'bttv-hide-chat-header',
      !hasFlag(settings.get(SettingIds.CHAT), ChatFlags.SHOW_CHAT_HEADER)
    );
  }
}

export default loadModuleForPlatforms([PlatformTypes.TWITCH, () => new ChatHeaderModule()]);
