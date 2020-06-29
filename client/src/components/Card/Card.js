import React from "react";
import ContactsCard from "./CardContent/ContactsCard";
import AboutCard from "./CardContent/AboutCard";
import VoteList from "./CardContent/VoteList";
import LoginCard from "./CardContent/LoginCard";
import RegisterCard from "./CardContent/RegisterCard";
import './Card.css';

// visibility:"hidden" hides element but still in DOM
// display:"none" removes element from DOM

class Card extends React.Component {
    //                     //
    // program entry point //
    //                     //
    render() {
        return (
            // this.props is coming from App.js --> Main.js --> Card.js
            <div className="cardContainer" id="cardContainer" style={{ visibility: this.props.visibility }}>

                <div id="cardInnards" className="textBlock">
                    <ContactsCard header="Local Government Contacts" display="none" />
                    <AboutCard header="About" display="none" />
                    <VoteList header="Issues In Your Area" display="none" />
                    <LoginCard header="Log In To Care'n" display="none" />
                    <RegisterCard header="Register for Care'n" display="none" />
                </div>

                {/* add buttons and stuff here */}
            </div>
        )
    }
}

export default Card;