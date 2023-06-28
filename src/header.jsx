import React from "react";
import './Header.css'
const Header = () => {

    return (
        <div id="my-div">
            <div>
                <button id="dropdown-button"><i class="gg-menu-right-alt"></i></button>
                <ul id="dropdown-list">
                    <li>
                        <a>معلومات المطور</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100065172561645">Facebook</a>
                    </li>
                    <li>
                        <a href="#">WhatsApp</a>
                    </li>
                    <li>
                        <a href="https://facebook.com/groups/5068441963246790/">Facebook group</a>
                    </li>



                    <div>حقوق النشر </div>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>
            <div>Mingle</div>
        </div>

    )
}

export default Header







