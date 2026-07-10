import { Events } from "discord.js";
import { logger } from "../utils/logger.js";

export default {
  name: Events.GuildBanAdd,

  async execute(ban) {
    console.log("GuildBanAdd event fired for:", ban.user.tag);

    try {
      await ban.user.send("You have been banned from Just Us Games. You probably broke one of the rules. DM the Community Manager "myth1xaldev" or appeal here https://discord.gg/KhJDcuw848");
      console.log("DM sent successfully!");
    } catch (error) {
      console.error(error);
      logger.warn(`Could not DM banned user ${ban.user.tag}`);
    }
  },
};
