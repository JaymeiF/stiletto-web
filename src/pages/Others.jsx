import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
var XMLParser = require("react-xml-parser");

class Others extends Component {
  state = { items: null };

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + "https://steamcommunity.com/games/903950/rss/")
      .then((response) => response.text())
      .then((response) => {
        this.setState({
          items: new XMLParser()
            .parseFromString(response)
            .getElementsByTagName("item"),
        });
      });
  }

  showUpdates() {
    if (this.state.items != null) {
      var data = [];
      this.state.items.forEach((item) => {
        if (item.children != null) {
          var title;
          var link;
          item.children.forEach((c) => {
            if (c.name != null && c.name === "title") {
              title = c.value;
            }
            if (c.name != null && c.name === "guid") {
              link = c.value;
            }
          });
          if (title != null && link != null) {
            data.push({ title: title, link: link });
          }
        }
      });
      if (data.length > 7) {
        data = data.slice(0, 7);
      }
      return data.map((update) => (
        <li className="list-group-item" key={update.title}>
          <a
            href={update.link + "?curator_clanid=9919055"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {update.title}
          </a>
        </li>
      ));
    } else {
      return "Game updates are loading";
    }
  }

  render() {
    const { t } = this.props;
    return (
      <div className="row">
        <Helmet>
          <title>Other Info - Stiletto</title>
          <meta
            name="description"
            content="Here you have different information such as the latest updates"
          />
        </Helmet>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header">{t("Latest updates")}</div>
            <ul className="list-group">{this.showUpdates()}</ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="p-4 d-flex flex-column position-static">
                  <h3 className="mb-0 pb-2">{t("Report Bugs")}</h3>
                  <p className="card-text mb-auto">
                    {t(
                      "I'd appreciate it if you find a bug and tell me about it on Github or another platform so that I can fix it"
                    )}
                  </p>
                  <a
                    className="btn btn-success m-2"
                    href="https://github.com/dm94/stiletto-web/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Report")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="p-4 d-flex flex-column">
                  <h3 className="mb-0 pb-2">{t("Discord Bot")}</h3>
                  <p className="card-text mb-auto">
                    {t(
                      "I have also created a discord bot useful to control the walkers and make a list of what is needed to create objects."
                    )}
                  </p>
                  <a
                    className="btn btn-success m-2"
                    href="https://top.gg/bot/715948052979908911"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Go to Discord bot")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <a
                    className="btn btn-success btn-block"
                    href="https://discord.gg/PdXxUWd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Dm94Dani´s Discord")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <a
                    className="btn btn-success btn-block"
                    href="https://www.paypal.me/dm94dani/5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Buy me a coffee")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block"
                    href="https://store.steampowered.com/app/903950/Last_Oasis/?curator_clanid=9919055"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Steam Page")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block"
                    href="https://discord.gg/lastoasis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Official Discord")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block"
                    href="https://lastoasis.gamepedia.com/Last_Oasis_Wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Wiki")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <iframe
                className="w-100"
                src="https://steamdb.info/embed/?appid=903950"
                title="Steam DB"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Others);
