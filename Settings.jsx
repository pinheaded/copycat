const { React, getModule } = require("powercord/webpack");
const { TextAreaInput } = require("powercord/components/settings");

const Button = getModule(m => m.ButtonLink, false).default

module.exports = class HastePasteSettings extends React.PureComponent {
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
            <div className="hastePasteSettings">
                <div className="description-3_Ncsb formText-3fs7AJ marginBottom20-32qID7 modeDefault-3a2Ph1 primary-jw0I4K">
                    Set text to copy using keys F2 - F12, it's kinda like copy pasting except you can paste over 10 things without needing to open your clipboard!
                </div>
                <div className="hastePasteSettingsGrid">
                    <div className="hastePasteSettingsGridFirstItem">
                        <h6 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP"
                            style = {{"margin-bottom": "10px"}}>
                            Where the fuck is F1?!
                        </h6>
                        <h5 className="description-3_Ncsb formText-3fs7AJ marginBottom20-32qID7 modeDefault-3a2Ph1 primary-jw0I4K">
                            Pressing F1 opens Discord Support, and I'm too lazy to change that L
                            <br/>
                            <br/>
                            Soon™
                        </h5>
                    </div>
                    {Object.keys(key_map).map((key) => {
                        return(
                            <div className="hastePasteSettingsGridItem">
                                <TextAreaInput
                                    className="hastePasteSettingsGridItemInput"
                                    onChange={(arg) => this.props.updateSetting(`${key_map[key]}`, arg)}
                                    placeholder="Enter something..."
                                    value={this.props.getSetting(`${key_map[key]}`)}>
                                    {key_map[key]} Key
                                </TextAreaInput>
                                <Button
                                    className="hastePasteSettingsGridItemButton"
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
                        .hastePasteSettingsGrid {
                            display: grid;
                            grid-template-columns: calc(33% - 5px) calc(33% - 5px) calc(33% - 5px);
                            grid-gap: 10px;
                        }

                        .hastePasteSettingsGridItem,
                        .hastePasteSettingsGridFirstItem {
                            background: var(--background-secondary);
                            backdrop-filter: blur(10px);
                            border-radius: 10px;
                            padding: 15px 10px 15px 10px;
                            color: var(--header-secondary);
                            height: 100%;
                        }

                        .hastePasteSettingsGridItemButton {
                            width: 100%;
                        }

                        .hastePasteSettingsGridItem div[class*="divider-"] {
                            border-color: transparent;
                        }
                    `}
                    </style>
                </div>
            </div>
        )
    }
}