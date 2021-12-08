import react from "react";
import './Home.css'

function Home() {
    return(
        <div>       <div class="container">
            <div class="container_left">
                <div class="container_left_top">
                    <h3>Personal Information</h3>
                    <div class="inner">
                        <table>
                            <tr>
                                <th>Name : </th>
                                <td>Mostafa Ahmed Shalaby</td>
                            </tr>
                            <tr>
                                <th>Age : </th>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th>Phone : </th>
                                <td>01092637057</td>
                            </tr>
                        </table>
                    </div>
                    <h3>Education</h3>
                    <p>Student at faculty of computer and Information science Menofia Universty</p>
                    
                </div>
                <div class="container_left_bottom">
                    <h3>Certifications</h3>
                    <div class="inner">
                    
                        <a href="https://drive.google.com/file/d/1TRixHAZamc8sZSTyitLb-VCiHdNqLn3C/view?usp=sharing" target="_blank">Desktop Application</a>
                        <a href="https://drive.google.com/file/d/1R5oV9__L4nXtJOn7_NId5b1c309MtQ19/view?usp=sharing" target="_blank">HTML CSS</a>
                           
                    </div>
                    
                </div>
            </div>
            <div class="container_right">
                <div class="container_right_top">
                </div>
                <div class="container_right_center" >
                    <h3>Languages</h3>
                    <div class="inner">
                        <p>Mother language : Arabic</p>
                        <p>Seconed language : English</p>
                    </div>
                </div>
                <div class="container_right_bottom">
                    <h3>Skills</h3>
                    <div class="inner" >
                        <p>C++</p>
                        <p>C#</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>SQL</p>
                        <p>java</p>
                        <p>OOP</p>
                        <p>Dart</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="footer">
            <h2>thanks for reading</h2>
        </div>
        </div>
 
    )
}
export default Home