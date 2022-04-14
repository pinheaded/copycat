const { React, getModule } = require("powercord/webpack");
const { TextAreaInput, SwitchItem } = require("powercord/components/settings");

const Button = getModule(m => m.ButtonLink, false).default

module.exports = class CopycatSettings extends React.PureComponent {
    render() {
        const key_map = {
            f2:  "F2",
            f3:  "F3",
            f4:  "F4",
            f5:  "F5",
            f6:  "F6",
            f7:  "F7",
            f8:  "F8",
            f9:  "F9",
            f10: "F10",
            f11: "F11",
            f12: "F12",
        }

        return(
            <div className="copycatSettings">
                <div className="description-30xx7u formText-2ngGjI marginBottom20-315RVT modeDefault-2fEh7a">
                    Set text to copy using keys F2 - F12, it's kinda like copy pasting except you can paste over 10 things without needing to open your clipboard!
                </div>
                <div className="copycatSettingsGrid">
                    <div className="copycatSettingsGridFirstItem">
                        <h6 className="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f"
                            style = {{"margin-bottom": "10px"}}>
                            Where the fuck is F1?!
                        </h6>
                        <h5 className="description-30xx7u formText-2ngGjI marginBottom20-315RVT modeDefault-2fEh7a">
                            Pressing F1 opens Discord Support, and I'm too lazy to change that L
                            <br/>
                            <br/>
                            Soon™
                        </h5>
                    </div>
                    {Object.keys(key_map).map((key) => {
                        return(
                            <div className="copycatSettingsGridItem">
                                <TextAreaInput
                                    className="copycatSettingsGridItemInput"
                                    onChange={(arg) => this.props.updateSetting(`${key_map[key]}`, arg)}
                                    placeholder="Enter something..."
                                    value={this.props.getSetting(`${key_map[key]}`)}>
                                    {key_map[key]} Key
                                </TextAreaInput>
                                <SwitchItem
                                    className="copycatSettingsGridItemSwitch"
                                    onChange={(arg) => this.props.updateSetting(`${key_map[key]}Enabled`, arg)}
                                    value={this.props.getSetting(`${key_map[key]}Enabled`, true)}>
                                    Enable Paste Key
                                </SwitchItem>
                                <Button
                                    className="copycatSettingsGridItemButton"
                                    size={Button.Sizes.MIN}
                                    color={Button.Colors.RED}
                                    onClick={() => {
                                        this.props.updateSetting(`${key_map[key]}`, "");
                                    }}>
                                    Clear
                                </Button>
                            </div>
                        )
                    })}
                    <style>
                    {`
                        .copycatSettingsGrid {
                            display: grid;
                            grid-template-columns: calc(33% - 5px) calc(33% - 5px) calc(33% - 5px);
                            grid-gap: 10px;
                        }

                        .copycatSettingsGridItem,
                        .copycatSettingsGridFirstItem {
                            background: var(--background-secondary);
                            backdrop-filter: blur(10px);
                            border-radius: 10px;
                            padding: 15px 10px 15px 10px;
                            color: var(--header-secondary);
                            height: 100%;
                        }

                        .copycatSettingsGridItemButton {
                            width: 100%;
                        }

                        .copycatSettingsGridItem div[class*="divider-"] {
                            border-color: transparent;
                            margin: 0;
                        }
                    `}
                    </style>
                </div>
            </div>
        )
    }
}