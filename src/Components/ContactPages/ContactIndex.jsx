import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Elon Musk",
          phone: "666-666-7770",
          email: "Elon@SpaceX.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Patrick Byrne",
          phone: "777-420-7770",
          email: "TheDude@Coolness.com",
          isFavorite: false,
        },
        {
          id: 3,
          name: "Leanne Hayes",
          phone: "609-777-7770",
          email: "Princess@PerfectGirl.com",
          isFavorite: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>
            <div className="row py-2">
                <div className="col-10 offset-1 row">
              <AddContact />
              </div>
            </div>
            <div className="row py-2">
            <div className="col-10 offset-1 row">
              <FavoriteContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == true
                )}
              />
              </div>
            </div>
            <div className="row py-2">
            <div className="col-10 offset-1 row">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == false
                )}
              />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
