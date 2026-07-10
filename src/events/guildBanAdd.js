import { Events } from "discord.js";
import { logger } from "../utils/logger.js";

export default {
  name: Events.GuildBanAdd,

  async execute(ban) {
    try {
      await ban.user.send(`
You have been banned from **${ban.guild.name}**.

If you believe this was a mistake, you may appeal here:

https://YOUR-APPEAL-LINK

Please include:
• Your Discord username
• Why you think the ban should be removed
• Any evidence that supports your appeal
`);
    } catch (error) {
      logger.warn(`Could not DM banned user ${ban.user.tag}`);
    }
  },
};
