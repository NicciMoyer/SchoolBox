
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext"
import 'rsuite/lib/styles/index.less';
import { Link } from "react-router-dom";
import { Sidenav, Nav, Icon } from 'rsuite';
import "../../pages/AssignmentPage/AssignmentPage";
import "../../pages/ClassPage/ClassPage";
import "../../pages/StudentDashboard/StudentDashboard";
import "../../pages/TeacherDashboard/TeacherDashboard"; 
import "./style.css"

function SideBar() {

    const { userId, prefix, firstName, lastName, userName, isTeacher } = useContext(UserContext)
    return (
        <div id= "navBody" >
            <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">

                <Sidenav.Body >
                    <Nav> Destinations
                        <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />} className= "navLink">


                            <Link
                                to={isTeacher ? {
                                    pathname: "/teacherdashboard"
                                } : { pathname: "/studentdashboard" }
                                }

                            > Dashboard </Link>
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="stop-circle" />} className= "navLink">

                            <Link
                                                                to= {{pathname: "/login"}}
                            >
                                Log out </Link>
                        </Nav.Item>


                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>

    )
}

export default SideBar;
