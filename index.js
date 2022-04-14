const Plugin = require("powercord/entities/Plugin");
const { getModule } = require("powercord/webpack");
const autoChatInput = (text) => getModule(["ComponentDispatch"], false).ComponentDispatch.dispatchToLastSubscribed("INSERT_TEXT", {
    plainText: text
})

const settings = require("./Settings");

module.exports = class Copycat extends Plugin {
    entityID = "copycat"

    keyup(event) {
        if (
               event.key == "F12"
            || event.key == "F11"
            || event.key == "F10"
            || event.key == "F9"
            || event.key == "F8"
            || event.key == "F7"
            || event.key == "F6"
            || event.key == "F5"
            || event.key == "F4"
            || event.key == "F3"
            || event.key == "F2"
        ) {
            if (this.settings.get(`${event.key}Enabled`, true) === true) autoChatInput(this.settings.get(event.key, ""));
        }
    }

    startPlugin() {
        powercord.api.settings.registerSettings(
            this.entityID,
            {
                category: this.entityID,
                label: "Copycat",
                render: settings
            }
        );

        this.keyup_func = this.keyup.bind(this);

        document.body.addEventListener("keyup", this.keyup_func);
        powercord.api.notices.sendToast("copycatNotif", {
            header: "Haste Paste Notice",
            content: "We've changed our plugin name. In short, this nullifies all plugin settings. Just go to User Settings > Copycat to set them back",
    		type: "success",
            timeout: 5000,
        });
        setTimeout(() => {
            powercord.api.notices.closeToast("copycatNotif");
        }, 10000);
    }

    pluginWillUnload() {
        powercord.api.settings.unregisterSettings(this.entityID);
        document.body.removeEventListener("keyup", this.keyup_func);
    }
}