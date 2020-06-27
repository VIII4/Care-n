import React from "react";
import './Sidebar.css';

// NOTE
// events are (jquery?) usually a seperate js file that is called by 
// html which listens to actions on the client side and reacts...
// I like this method better...

class Sidebar extends React.Component {
    openNav = () => {
        document.getElementById("carenSidebar").style.width = "30vw";
        document.getElementById("carenSidebar").style.borderRight = "border-right: 5px solid #000"
        document.getElementById("main").style.marginLeft = "30vw";
    }

    closeNav = () => {
        document.getElementById("carenSidebar").style.width = "0px";
        document.getElementById("carenSidebar").style.borderRight = "border-right: 5px solid #000"
        document.getElementById("main").style.marginLeft = "0px";
    }

    openCard = (event, type) => {
        // first close any open cards

        document.getElementById("cardContainer").style.visibility = "visible";

        switch (type) {
            // set to visible by id since they are unique

            case "contacts":
                document.getElementById("contactsCardContent").style.display = "block";
                break;
            case "about":
                document.getElementById("aboutCardContent").style.display = "block";
                break;
        }
        this.closeNav()
    }

    //                     //
    // program entry point //
    //                     //
    render() {
        return (
            // main sidebar div container
            <div>
                {/* top row with open button and logo */}
                <div id="main">

                    {/* sidebar open button */}
                    <button className="openbtn" onClick={this.openNav}>☰</button>

                    {/* app logo */}
                    <a className="logo" href="#">Care'n</a>
                </div>

                {/* sidebar contents */}
                <div id="carenSidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>x</a>
                    <a id="aTag" onClick={(event) => { this.openCard(event, "about") }}>About</a>
                    <a id="aTag" onClick={(event) => {
                        this.openCard(event, "contacts")
                    }}>Contact</a>
                </div>
            </div>
        )
    }
}

export default Sidebar;