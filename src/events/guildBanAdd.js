import { Events } from "discord.js";
import { logger } from "../utils/logger.js";

export default {
  name: Events.GuildBanAdd,

  async execute(ban) {
    console.log("GuildBanAdd event fired for:", ban.user.tag);

    try {
      await ban.user.send({
        content: "You have been banned from **Just Us Games**.\n\nYou likely violated one or more of our server rules.\n\nIf you believe this was a mistake, you can appeal here:\nhttps://discord.gg/KhJDcuw848\n\nAlternatively, you may contact **myth1xaldev** if appropriate."
      });

      console.log("DM sent successfully!");
    } catch (error) {
      console.error(error);
      logger.warn(`Could not DM banned user ${ban.user.tag}: ${error.message}`);
    }
  },
};
