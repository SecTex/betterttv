import {ChatFlags, PlatformTypes, SettingIds} from '../../constants.js';
import settings from '../../settings.js';
import {hasFlag} from '../../utils/flags.js';
import {loadModuleForPlatforms} from '../../utils/modules.js';

class ChatTopCheererModule {
  constructor() {
    settings.on(`changed.${SettingIds.CHAT}`, this.toggleTopCheerer);
    this.toggleTopCheerer();
  }

  toggleTopCheerer() {
    document.body.classList.toggle(
      'bttv-hide-top-cheerer',
      !hasFlag(settings.get(SettingIds.CHAT), ChatFlags.SHOW_TOP_CHEERER)
    );
  }
}

export default loadModuleForPlatforms([PlatformTypes.TWITCH, () => new ChatTopCheererModule()]);
