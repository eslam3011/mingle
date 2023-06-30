import React from "react";
import './Header.css'
const Header = () => {

    return (
        <div id="my-div">
            <div>
                <button id="dropdown-button"><i className="gg-menu-right-alt"></i></button>
                <div id="dropdown-list">
                    <div>
                        <a>معلومات المطور</a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100065172561645">Developer</a>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100009638650491">Developer</a>
                    </div>
                    <div>
                        <a href="#">WhatsApp</a>
                    </div>
                    <div>
                        <a href="https://facebook.com/groups/5068441963246790/">Facebook group</a>
                    </div>

                </div>
            </div>
            <div>Mingle</div>
        </div>

    )
}

export default Header







